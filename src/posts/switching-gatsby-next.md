---
title: "Switching from Gatsby to NEXT"
date: "2020-04-14T06:41:32.169Z"
---

Yeah you read that right I switched from Gatsby to NEXT for my blog, when a lot of people are doing the opposite. So why did I do that?

Simple: I didn't enjoy developing with Gatsby, which might shock someone reading this in the future when Gatsby takes over as the defacto React static site generator probably. But nonetheless, Gatsby just wasn't my cup of tea. I built my blog with it and also a site for my father. I don't have that much experience with the stack, but enough to form an opinion on why I don't like it. Keep in mind that I might just suck at using Gatsby and it doesn't deserve me abandoning it like this.

## Abstractions
One of the most annoying things about Gatsby (which is also somehow the best thing) is that it abstracts away too much. The 'it just works' mentally ironically doesn't ALWAYS work when you want to do something custom, like not use GraphQL or Gatsby's own plugin system to do something. I like more control over my code and Gatsby doesn't give me that. 

Going back to GraphQL. The technology is amazing and I see what problems it solves, but I just don't agree it should be used the way Gatsby uses it. Looking at the query and schema with GraphiQL is confusing and frustrating when I just want to fetch data from one source or create a simple page that is separate from the blog posts. Again, not really for me.
## Too young
This one depends on the time that you decided to start building with Gatsby. I picked it up in summer of 2019 and just had the feeling some things just weren't ready or not enough people have had to solve specific problems for the framework to be considered mature.

Case and point is the implementation of l18n in Gatsby. I found one plugin that worked how I wanted it to and using something React specific was discouraged by the community and/or didn't work as expected because of some specific issue with Gatsby. Also since the technology is so young and people just write plugins quickly and never return to them is also a reason why I don't recommend to use Gatsby for serious projects, unless you are ready to really dig in and find solutions yourself.

## Rather stick with tested technology

I have never used NEXT prior to migrating my blog to it, but I've heard many good things about it, saw that it stood the test of time and that there was a much larger community around it with problems solved left and right for my specific needs + no GraphQL for fetching local data thank god ;D
I'll let this blog know when I also decide that NEXT sucks and I should just switch back. But untill then I have more blogs to write, next ones being on D3 and Angular. Follow on Twitter for updates.