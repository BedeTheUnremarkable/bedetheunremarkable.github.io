---
layout: default
title: Home
---
<p class="eyebrow">A personal website</p>

# A place for words<br>and other curiosities.

Welcome. I'm Bede The Unremarkable. This is a home for my writing, creative projects, and assorted observations.
{: .intro }

<div class="paths">
<a href="{{ '/writing/' | relative_url }}"><span class="eyebrow">The notebook</span><h2>Writing</h2><p>Essays, stories, and things worth thinking about.</p><span>Browse the writing →</span></a>
<a href="{{ '/projects/' | relative_url }}"><span class="eyebrow">The workbench</span><h2>Projects</h2><p>A space for comics, games, and other experiments.</p><span>Visit the workbench →</span></a>
</div>

## Latest entries

{% if site.posts.size > 0 %}
{% for post in site.posts limit:5 %}
<div class="entry"><time datetime="{{ post.date | date_to_xmlschema }}">{{ post.date | date: '%b %-d, %Y' }}</time><a href="{{ post.url | relative_url }}">{{ post.title | escape }}</a></div>
{% endfor %}
{% else %}
The notebook is empty for now. New writing will appear here when it's ready.
{% endif %}
