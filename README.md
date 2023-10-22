# Streamlabs custom chat & alerts
### Made to look like an Apple II console and an information panel like those found in trams/buses

sort of. It's not the best thing in existence, but it works.

anyway

## To change the chat:
Open the corresponding file for the text field you want to change [here](https://streamlabs.com/dashboard#/chatbox). Simply copy the contents of the file and paste over the entire existing text on the website.

- HTML: [html.html](html.html)
- CSS: [styles.css](styles.css)
- JS: [script.js](script.js)
- Custom Fields Editor: [customFields.json](customFields.json)

## To change the alerts:
Similarly, you will want to go into your alert box and copy and paste as a drop-in replacement of the alert type with the corresponding file name.

- Follows - HTML: [follows.html](alerts/follows.html)
- Subscriptions - HTML: [subscribed.html](alerts/subscribed.html)
- Donations - HTML: [donated.html](alerts/donated.html)
- Bits - HTML: [bits.html](alerts/bits.html)
- CSS: [styles.css](alerts/styles.css). The CSS replacement is applied for all of the alert notifications.

Additionally, you will have to change:
- The background color to #000000 in general
- The layout to the middle one (text over background image) in general and the rest of the alerts (I changed this just in case, because when I was testing it, it would sometimes not be the chosen layout)
- On all the alert subcategories:
  - Alert animations to "Slide In Down" and Slide Out Up"
  - Text animation to "None"
  - No background image
  - 10 second duration

I should also say here that changing the font settings within each alert (after the custom HTML/CSS) won't do anything. If you want a different font size or color, you will have to change them in `#alert-user-message` and `#alert-message` within the [styles.css](alerts/styles.css) file.
