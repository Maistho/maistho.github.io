---
layout: post
title: "Extracting ARToolKit for iOS into a new project"
description: ""
category: Programming
tags: ['iOS', 'Objective-C']
---

ARToolKit is a quite powerful library for creating Augmented Reality applications
and since the core library is written in C, it is widely compatible. We're
trying to use it in Objective-C and an iPhone app. It shouldn't really be very complicated,
right?

# What are we trying to do?
ARToolKit isn't available as a cocoapod, nor as a simple framework. It is available
as a collection of example projects, which all contain most or all of the core source
code, and really, I don't want to move all of my current code into their project
and just change that which is neccessary. There should be a better way.

# Create a new project
First off, create a new single view project in XCode, and download the example
projects from ARToolkits website.

Next, let's import all required frameworks into the new project. Look at what frameworks
are imported in the example code, and import those. I needed to import:

* Stuff
* Stuff
* Stuff

Now we'll need to import the neccessary parts from ARToolKit. I've found that you'll need to import the following folders:

* ARAppCore
* include
* lib
* bin
* ARApp2_Prefix.pch

Import them by dragging them from Finder into Supporting Files. Make sure that "Copy items if needed" and "create groups" are enabled, and that you don't add the imported files to you build target (yet).

You can now import the same libraries as ARApp2 uses, from the lib folder. I needed to import:

* stuff
* stuff

## Build settings
- Build Options
 - Enable bitcode => NO
- Apple LLVM7.0 - Code Generation
 - no common blocks => NO
-Apple LLVM7.0 - Language
 - C language dialect => compiler default
 - precompile prefix header => YES
 - prefix header => ARApp2_Prefix.pch (If something goes wrong here, make sure that it's a correct path to the file)
- Apple LLVM7.0 - Language - C++
 - C++ Language dialect => C++11 [-std=c++11]
- Apple LLVM Language Modules
 - enable modules (C and Objective-C) => NO (maybe can be YES, try it)

## Build phases
Add the same files to compilation that the example project has (from ARAppCore), also set arc to off

Copy the entire viewcontroller to your project (probably in a new file). I recommend using a nested viewcontroller typ of thingy

Should work now

# Troubleshooting

## Problem
* Unknown type name ‘ARDouble’, did you mean ‘double’?
* Cannot find ar.h

## Solution
Go to build settings -> search paths -> header search paths and put in the path for “include” and “ios511” folder.

## Problem
*  Error loading pattern file Data2/patt.hiro.

## Solution
This NSLog comes from ARViewController.m. Make sure you have copied the right ARViewController.m and ARViewController.h files. (You should use what is in ARApp2 not ARApp)

Thanks to
[https://www.evernote.com/shard/s263/sh/4ebc9677-11e3-4441-8579-3bcacfc9c839/1347275e2d93e273](https://www.evernote.com/shard/s263/sh/4ebc9677-11e3-4441-8579-3bcacfc9c839/1347275e2d93e273)

