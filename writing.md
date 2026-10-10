---
layout: default
title: Writing
permalink: /writing/
---
# Writing

Essays, fiction, and assorted observations. Here be SNCA.

{% if site.posts.size > 0 %}
{% for post in site.posts %}
<div class="entry"><time datetime="{{ post.date | date_to_xmlschema }}">{{ post.date | date: '%b %-d, %Y' }}</time><a href="{{ post.url | relative_url }}">{{ post.title | escape }}</a></div>
{% endfor %}
{% else %}
Nothing published yet. Watch this space—or subscribe to the [RSS feed]({{ '/feed.xml' | relative_url }}).
{% endif %}
