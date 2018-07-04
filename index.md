## Publicaciones recientes

<ul>
  {% for post in site.posts %}
  <li>
    <a href="{{ post.url }}">
    <h3>{{ post.title | upcase }}</h3>
    <p class="blogdate">{{ post.date | date: "%d %B %Y" }}</p>
    </a>
  </li>
  {% endfor %}
</ul>
