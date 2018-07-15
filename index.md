---
layout: default
title: Ezteven blog
description: Me gusta ver el mundo desde otras perspectivas.
image: /assets/icons/favicon-96x96.png
author: esteban_quezada
lang: es
---

## Publicaciones recientes
---

<div>
  {% for post in site.posts %}
    <div class="post-row">
      <div class="post-col-left">
        <a href="{{ post.url }}">
        <div class="post-title">{{ post.title }}</div>
        <div class="post-description">{{ post.description | truncatewords: 15 }}</div>
        <div class="post-date">{{ post.categories }} · {{ post.date | date: "%d %B %Y" }}</div>
        </a>
      </div>
      <div class="post-col-right">
        {% if post.image %}
          <div class="post-image" style="background: url({{ post.image }}) 50% 50% no-repeat;">
          </div>
        {% endif %}
      </div>
    </div>
    <hr>
  {% endfor %}
</div>
