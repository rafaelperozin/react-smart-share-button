# Reusable Share Button
** SOLID Principles + React + TypeScript **

A share button module that I can add to any page to enable the user to share the current page's link or print it. We only have Facebook and Twitter, but at any time, the client would like to add new social media or even an option to share on WhatsApp or send by email. Also, it should be easy to create new buttons inside the module and set which button I would like to enable on each page.

## Using the share button
```javascript
<ShareButton allow={['twitter', 'facebook', 'whatsapp', 'print']} />
```

* The `className` is an optional props.
* Only add to the allow array the buttons you would like to use.
