---

title: Inicio
image: /assets/icons/favicon-96x96.png
lang: pt
ads: false

---

{% include index_header.html %}
<div>
  {% assign posts=site.posts | where:"lang", page.lang %}
  {% for post in posts limit:10 %}
  {% include posts_list.md %}
  {% endfor %}
</div>
<!--
<div class="pagination">
    <span class="paginate-btn">{{ site.data.i18n.anterior[page.lang] }}</span>
    <span class="paginate-btn">{{ site.data.i18n.siguiente[page.lang] }}</span>
</div>
-->