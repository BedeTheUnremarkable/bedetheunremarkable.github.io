---
layout: default
title: Photography
permalink: /art/photography/
---
# Photography

Amateur photographs, newest first.

{% assign photos = site.data.photos | sort: "date" | reverse %}
{% if photos.size > 0 %}
{% assign years = photos | group_by_exp: "p", "p.date | date: '%Y'" %}
{% for year in years %}
<h2 class="gallery-year">{{ year.name }}</h2>
<ul class="gallery">
{% for p in year.items %}
<li><a href="{{ '/assets/img/photos/' | append: p.file | relative_url }}" data-caption="{% if p.title %}{{ p.title | escape }} &middot; {% endif %}{{ p.date | date: '%B %Y' }}"><img src="{{ '/assets/img/photos/thumbs/' | append: p.file | relative_url }}" alt="{{ p.alt | escape }}" loading="lazy"></a></li>
{% endfor %}
</ul>
{% endfor %}
<script src="{{ '/assets/js/gallery.js' | relative_url }}"></script>
{% else %}
Nothing here yet.
{% endif %}
