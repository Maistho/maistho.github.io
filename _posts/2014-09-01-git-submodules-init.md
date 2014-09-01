---
layout: post
title: "git init and pull all submodules"
description: "how to pull all submodules"
category:
tags: []
---

I always seem to forget some commands. How to pull all the submodules in my dotfiles git repo is something I have to look up every time.

So, mostly for my own future reference, this is the commands used to initialise submodules after a repo has been cloned:
{% highlight bash %}
```
git submodule init
git submodule update --recursive
```
{% endhighlight %}
