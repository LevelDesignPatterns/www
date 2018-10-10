---
layout: default
title: about
permalink: /
---

<!-- <h3>introduction</h3> -->

<p> A level design pattern is a repeating configuration (of space and logic)
which can be found again and again in video games. They are valuable and used
repeatedly because of their predictable effect on the players behaviours.</p>

<h3>list of patterns</h3>

<div class = "container">
    {% for pattern in site.patterns %}
        <div class = "key">
            <a href = "{{pattern.url}}">{{pattern.name}}</a>
        </div>

        <div class = "value">
            {{pattern.description}}
        </div>
    {% endfor %}
</div>

<h3>get involved</h3>

<p>Hosted on github <a href = "https://github.com/LevelDesignPatterns/">
https://github.com/LevelDesignPatterns/</a> the raw data is
available. Get in touch if you want to help.</p>

<h3>patterns elsewhere</h3>

<p>There are other collections of level design patterns, e.g. some part of a thesis
or for specific genre of game. Level design patterns from those other sources
are also included here.</p>


{% for source in site.data.websites %}
<p><a href = "{{source.url}}">{{source.title}}</a></p>
{% endfor %}

{% for source in site.data.books %}
<p>{{source.authors}} ({{source.year}}) {{source.title}} {{source.publisher}} <a href = "{{source.url}}">{{source.url}}</a></p>
{% endfor %}
