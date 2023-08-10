---
title: Pygal
ref: http://pygal.org/en/stable/
---

## Install

```shell
pip install pygal
```

## Usage

### Python script

```python
import pygal, flask

custom_style = pygal.style.LightenStyle('#00AA00', label_font_size = 32, major_label_font_size = 35, background='transparent', plot_background='transparent')
bar_chart = pygal.Bar(show_legend=False, js=[], print_values=False, height=400, style=custom_style) # js and print_values remove mouse interaction
bar_chart.x_labels = [x+1 for x in range(10)]
bar_chart.add('Progress', [42, 43, 43, 49, 46, 45, 47, 52, 49, 51])
bar_chart.render_to_file('tmp/result.svg')

return flask.send_file('tmp/result.svg', mimetype='image/svg+xml')
```

### HTML

```html
<figure id="fishdatagraph">
    <embed src="tmp/result.svg" type="image/svg+xml" />
</figure>
```
