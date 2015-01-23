---
layout: post
title: "About using float"
description: ""
category:
tags: [html,css,web]
---

The single biggest reason for weird bugs my students had today was css float. Using float is often not needed, as `display: inline` or `display: inline-block` often achieves the same things. It is however, sometimes, very useful, but there are some caveats that you need to avoid.

1. Always try to put floating elements inside a wrapping div.
2. Try to keep the floated elements seperate from other, non-floaty, elements.
3. This wrapping div should _always_ have `overflow: hidden`, to avoid a whole range of strange bugs.


Here's an [example](http://jsfiddle.net/9s2u0szk/) of a simple sidebar using float:

{% highlight html %}
<div id="container">
	<div id="sidebar">
		<p>This is a sidebar</p>
	</div>
	<div id="content">
		<p>Lorem ipsum osv</p>
	</div>
</div>
{% endhighlight %}

{% highlight css %}
#container {
	overflow: hidden;
}
#sidebar, #content {
	float: left;
}
#sidebar {
	background-color: #f0f000;
	width: 100px;
}
#content {
	background-color: #00f0f0;
	width: calc(100% - 100px);
}
{% endhighlight %}
