---
title: Using Gmail as email aggregator
date: 2006-04-24 00:47:14 -03:00
categories:
- Posts
tags:
- google
- gmail
- tweak
- email
- aggregator
- email-aggregator
layout: post
status: publish
author: Rafael Lima
author_login: admin
author_email: contato@rafael.adm.br
author_url: http://rafael.lima.myopenid.com/
wordpress_id: 26
wordpress_url: http://rafael.adm.br/p/using-gmail-as-a-email-aggregator/
---

I realized today that gmail has an option to aggregate multiple accounts in your gmail account. In other words, you can send an email with from address of another service, using gmail interface. Now we can aggregate all of our accounts on a unique gmail account.
If you want to use you gmail account as an email aggregator, like me, follow these steps:
<ol>
	<li>Configure all of your non-gmail accounts to <strong>copy all messages to you gmail account</strong></li>
	<li>On you gmail account,<strong> create a label for each account</strong> you are aggregating</li>
	<li>Create <strong>filters based on to:</strong> applying the labels you created</li>
	<li>Go to <a title="Open Gmail Help Center (new window)" target="_blank" href="http://mail.google.com/support/bin/answer.py?answer=20616">Settings > Accounts > Send mail as</a> and add all your non-gmail accounts</li>
	<li>Check <strong>Reply from the same address the message was sent to</strong>.</li>
</ol>
Now you will be able to use gmail interface and storage to read and reply all your non-gmail accounts.

There is a "bug" that Google didn't solved yet, there is no way to have one signature for each account. But we can bypass this tweaking gmail with a <a target="_blank" title="Primaty script post (new window)" href="http://userscripts.org/scripts/show/1592">little script</a> written by  <a target="_blank" title="Visit his profile (new window)" href="http://userscripts.org/people/546">choonkeat</a> and improved by me.

<strong>Gmail Tweaks: Multiple Signatures Script</strong>
<ol>
	<li>Install <strong><a title="Open plugin site (new window)" target="_blank" href="http://greasemonkey.mozdev.org/">Greasemonkey</a> </strong>firefox plugin</li>
	<li><a title="Install the script" target="_blank" href="/files/gmailtweaksmultiplesigna.user.js">Install the user script</a> (click on this link)</li>
	<li>Go to Tools > Install This User Script on firefox menu</li>
	<li>Go to Tools > <strong>Manage User Scripts</strong></li>
	<li>Select the Gmail Tweaks... script</li>
	<li>Click on edit, to <strong>edit the script file</strong></li>
	<li><strong>Put you information</strong> (your accounts, labels and signatures)</li>
	<li>Go to Settings > Signature and click on <strong>No Signature</strong></li>
	<li>Click on <strong>Compose Mail</strong> on Gmail and...</li>
	<li>... enjoy this feature!</li>
</ol>
