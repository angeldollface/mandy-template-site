---
layout: "layouts/page.liquid"
title: "Hello World"
date: "26/06/2023"
lastUpdated: "00:00"
description: "A 'Hello World' post on my shiny new Mandy-powered site."
---

## YOUR TITLE

Mandy and this theme have support for most Markdown features that GitHub also supports. Below are samples of a some of these features.

## A RANDOM LIST

Here's a random unordered list.

- This item 1 of this list.
- This item 2 of this list.
- This item 3 of this list.
- This item 4 of this list.

## A RANDOM CODE SAMPLE

Since Mandy is written in Rust, here's a `Hello World` code-sample in Rust:

```Rust
pub fn main() -> () {
    let msg: String = String::from("Hello World!");
    println!("{}", &msg);
}
```

Syntax highlighting will have to be added by theme- and site-developers individually.
