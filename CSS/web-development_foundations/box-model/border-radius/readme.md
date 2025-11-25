Border Radius
3 min

Ever since we revealed the borders of boxes, you may have noticed that the borders highlight the true shape of an element’s box: square. Thanks to CSS, a border doesn’t have to be square.

You can modify the corners of an element’s border box with the border-radius property.

div.container {
  border: 3px solid blue;
  border-radius: 5px;
}

Copy to Clipboard

The code in the example above will set all four corners of the border to a radius of 5 pixels (i.e. the same curvature that a circle with a radius of 5 pixels would have).

You can create a border that is a perfect circle by first creating an element with the same width and height, and then setting the radius equal to half the width of the box, which is 50%.

div.container {
  height: 60px;
  width: 60px;
  border: 3px solid blue;
  border-radius: 50%;
}

Copy to Clipboard

The code in the example above creates a <div> that is a perfect circle.
Instructions

    Checkpoint 1 Enabled

    1.

    In style.css, set the border radius of #banner .content h1 to 15 pixels.

    Additionally, try experimenting with other border-radius values and running your code to see the result!
