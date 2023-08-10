---
title: Reportlab
---

## Font for Japanese

[https://ipafont.ipa.go.jp/#jp](https://ipafont.ipa.go.jp/#jp)

## Usage example

```python
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.lib.pagesizes import letter
from reportlab.lib.styles import ParagraphStyle
from reportlab.lib.units import inch
from reportlab.lib import enums, colors
from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer, Table, TableStyle

## Register font
pdfmetrics.registerFont(TTFont("IPA Gothic", './static/fonts/ipag.ttf'))

## Start new document
doc = SimpleDocTemplate('report.pdf')

## Styling text (paragraph)
customStyle = ParagraphStyle(
    name='Title',
    fontName='IPA Gothic',
    alignment=enums.TA_CENTER, # Default TA_LEFT
    fontSize=20,
    leading=24  # Line height
)

## Create content
parts.append(Paragraph('This is a paragraph and it wraps line when it arrives to the end of the page.', customStyle))
parts.append(Spacer(1, 0.2 * inch)) # Add vertical space

## Creating table data
tableContent = [
    (Paragraph('Some text', customStyle), 10),
    (),
    (Paragraph('Content'), 15)
]
## Borders and vertical align
tableStyle = TableStyle([
    ('BOX', (0,0), (1,-1), 1.0, colors.black),
    ('VALIGN',(0,0),(-1,-1), 'TOP'),
])
## Instantiate table - by default it does not have any grid
table = Table(tableContent, colWidths=[110, 150], rowHeights=[16, 8, 15])
table.setStyle(tableStyle)
parts.append(table)

doc.build(parts)
```
