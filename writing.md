---
layout: default
title: Writing
permalink: /writing/
---
# Writing

Essays, fiction, and assorted observations. Here be SNCA.

[Fiction](#fiction) · [Essays](#essays) · [SNCA](#snca)

{% assign writing_posts = site.posts | where_exp: "post", "post.announcement != true" %}

<h2 id="fiction">Fiction</h2>

{% assign section_posts = "" | split: "," %}
{% for post in writing_posts %}
{% unless post.categories contains 'SNCA' %}
{% if post.categories contains 'Fiction' %}
{% assign section_posts = section_posts | push: post %}
{% endif %}
{% endunless %}
{% endfor %}
{% for post in section_posts %}
<div class="entry"><time datetime="{{ post.date | date_to_xmlschema }}">{{ post.date | date: '%b %-d, %Y' }}</time><a href="{{ post.url | relative_url }}">{{ post.title | escape }}</a></div>
{% else %}
Nothing published here yet.
{% endfor %}

<h2 id="essays">Essays</h2>

{% assign section_posts = "" | split: "," %}
{% for post in writing_posts %}
{% unless post.categories contains 'SNCA' %}
{% if post.categories contains 'Essays' %}
{% assign section_posts = section_posts | push: post %}
{% endif %}
{% endunless %}
{% endfor %}
{% for post in section_posts %}
<div class="entry"><time datetime="{{ post.date | date_to_xmlschema }}">{{ post.date | date: '%b %-d, %Y' }}</time><a href="{{ post.url | relative_url }}">{{ post.title | escape }}</a></div>
{% else %}
Nothing published here yet.
{% endfor %}

<h2 id="snca">SNCA</h2>

Shit Nobody Cares About: diary entries, casual media commentary, and assorted thoughts.

{% assign section_posts = writing_posts | where_exp: "post", "post.categories contains 'SNCA'" %}
{% for post in section_posts %}
<div class="entry"><time datetime="{{ post.date | date_to_xmlschema }}">{{ post.date | date: '%b %-d, %Y' }}</time><a href="{{ post.url | relative_url }}">{{ post.title | escape }}</a></div>
{% else %}
Nothing published here yet.
{% endfor %}
