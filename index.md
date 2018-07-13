---
layout: default
title: Ezteven blog
description: Me gusta ver el mundo desde otras perspectivas.
image: /assets/icons/favicon-96x96.png
author: esteban_quezada
lang: es
---

## Publicaciones recientes

<div>
  {% for post in site.posts %}
    <div style="display: flex">
      <div style="flex: 75%">
        <a href="{{ post.url }}">
        <h3>{{ post.title }}</h3>
        <p class="blogdate">{{ post.date | date: "%d %B %Y" }}</p>
        </a>
      </div>
      <div style="flex: 20%">
        {% if post.image %}
          <img src="{{ post.image }}">
        {% endif %}
      </div>
    </div>
    <hr>
  {% endfor %}
</div>
