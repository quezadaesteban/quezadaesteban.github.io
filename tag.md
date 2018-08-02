---

layout: default
title: Ezteven blog
description: Me gusta ver el mundo desde otras perspectivas.
image: /assets/icons/favicon-96x96.png
author: esteban_quezada
lang: es
permalink: /tag/

---

# Etiquetas
---
{% for tag in site.tags %}
  <h1 id="{{ tag[0] | slugify }}">#{{ tag[0] }}</h1>
  {% for post in tag[1] %}
  <div>
    <li>
      <a href="{{ post.url }}">{{ post.title }}</a>
      <br>
      {{ post.description | truncatewords: 15 }}
    </li>
    {% for tag in post.tags %}
			<a class="tag" href="/tag/#{{ tag | slugify }}"><code>{{ tag }}</code></a>
		{% endfor %}
  </div>
  {% endfor %}
{% endfor %}