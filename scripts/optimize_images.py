from pathlib import Path
from PIL import Image
import re,json,hashlib
ROOT=Path(__file__).resolve().parents[1]
report=[]; mapping={}
for base in [ROOT/'src/assets/images',ROOT/'public/assets/images']:
 for src in sorted(base.rglob('*')):
  if src.suffix.lower() not in ('.png','.jpg','.jpeg'):continue
  out=src.with_suffix('.webp')
  with Image.open(src) as im:
   if im.mode not in ('RGB','RGBA'):im=im.convert('RGBA' if 'transparency' in im.info else 'RGB')
   im.save(out,'WEBP',quality=88,method=6)
  if out.stat().st_size>=src.stat().st_size:
   out.unlink();continue
  # Preserve source dimensions and originals. Swap references only to smaller files.
  mapping[src.name]=out.name
  report.append({'source':str(src.relative_to(ROOT)).replace('\\','/'),'webp':str(out.relative_to(ROOT)).replace('\\','/'),'before':src.stat().st_size,'after':out.stat().st_size})
text_files=list((ROOT/'src').rglob('*.jsx'))+list((ROOT/'src').rglob('*.js'))+list((ROOT/'src').rglob('*.css'))+list((ROOT/'public').rglob('*.html'))+list((ROOT/'products').rglob('*.html'))+list((ROOT/'factory').rglob('*.html'))+list((ROOT/'finishes').rglob('*.html'))+list((ROOT/'custom-options').rglob('*.html'))+[ROOT/x for x in ['index.html','products.html','size-options.html','generate_all_pages.py','generate_9_product_htmls.py']]
for path in text_files:
 text=path.read_text(encoding='utf-8')
 for before,after in mapping.items():text=text.replace(before,after)
 if path.suffix=='.html':
  text=text.replace('https://paperbagworks.com','https://www.paperbagworks.com')
  text=re.sub(r'(https://www\.paperbagworks\.com/[^\s"<>]*?)\.html',r'\1',text)
  # Actual above-the-fold product images must not wait for lazy-load heuristics.
  if path.parent.name=='products' and path.name!='index.html':
   pat=r'(<img\b[^>]*\bsrc="[^"]*assets/images/(?:products|scenarios)/[^>]*?)loading="lazy"'
   text=re.sub(pat,r'\1loading="eager" fetchpriority="high"',text,count=1)
 if path.name.startswith('generate_'):
  text=re.sub(r'BASE_DIR = r"[^"\n]+"','BASE_DIR = os.path.dirname(os.path.abspath(__file__))',text)
 if text!=path.read_text(encoding='utf-8'):path.write_text(text,encoding='utf-8')
(ROOT/'image-optimization.json').write_text(json.dumps(report,indent=2),encoding='utf-8')
print(json.dumps({'converted':len(report),'before':sum(r['before'] for r in report),'after':sum(r['after'] for r in report)}))
