---
layout: default
title: writings
permalink: /writings

---

<h3>writings</h3>

<p>There are other collections of level design patterns, e.g. some part of a thesis
or for specific genre of game. Level design patterns from those other sources
are also included here.</p>

{% for source in site.data.writings %}
<p>{{source.authors}} ({{source.year}}) {{source.title}} {{source.publisher}}<br /><a href = "{{source.url}}">{{source.url}}</a></p>
{% endfor %}

