---
layout: default
title: index
permalink: /
---

### introduction

A level design pattern is a repeating configuration (of space and logic)
which can be found again and again in video games. They are valuable and used
repeatedly because of their predictable effect on the players behaviours.

### index of patterns 

<div class = "container">
    {% for pattern in site.data.patterns %}
        <div class = "key">
            <a href = "{{pattern.url}}">{{pattern.name}}</a>
        </div>

        <div class = "value">
            {{pattern.description}}
        </div>
    {% endfor %}
</div>

