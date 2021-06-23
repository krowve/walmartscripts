# notes

If I haven't scared you away yet go back and read the main readme.

walmart.monitor will cycle through a bunch of web pages, if one comes
up in stock and within price thresholds it will cart.  To start,
enable it and visit a product page.

walmart.checkout will notice something is in cart, and go up to hiting
the review order button.

For walmart.monitor change the INTERVALTIME variable to contol how
long it waits in between page refreshes.

For walmart.monitor make sure popups are enabled if you want sound to
play.

You can easily edit the ITEMS array to remove cards you don't want to
scan.

Adding new products should be easy to walmart.monitor should be easy,
just follow the existing examples.

For walmart.checkout it will take you as far as the review screen.  If
you have autofill for credit cards it will go past review screen.  If
not you can manually enter a CVC/CVV and it will keep spamming the
review order button every second.

You still have to place order manually, I'm not scripting that.

If this helps you get a card, let me know.

If you have any bug fixes or improvements let me know that as well.
