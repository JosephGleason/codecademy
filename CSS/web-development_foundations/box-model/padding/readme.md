Padding
6 min

The space between the contents of a box and the
borders
Preview: Docs Loading link description
of a box is known as padding. Padding is like the space between a picture and the frame surrounding it. In CSS, you can modify this space with the padding property.

p.content-header {
  border: 3px solid coral;
  padding: 10px;
}

Copy to Clipboard

The code in this example puts 10 pixels of space between the content of the paragraph (the text) and the borders, on all four sides.

The padding property is often used to expand the background color and make the content look less cramped.

If you want to be more specific about the amount of padding on each side of a box’s content, you can use the following properties:

    padding-top
    Preview: Docs Loading link description
    padding-right
    Preview: Docs Loading link description
    padding-bottom
    Preview: Docs Loading link description
    padding-left
    Preview: Docs Loading link description

Each property affects the padding on only one side of the box’s content, giving you more flexibility in customization.

p.content-header {
  border: 3px solid fuchsia;
  padding-bottom: 10px;
}

Copy to Clipboard

In the example above, only the bottom side of the paragraph’s content will have a padding of 10 pixels.
Instructions

    Checkpoint 1 Enabled

    1.

    In a single line, set the .navigation li elements to have 20 pixels of padding.

    Click “Run” and observe the changes.

Checkpoint 2 Step instruction is unavailable until previous steps are completed

2.

Look at the red boxes at the bottom of the web page. Set the .share a elements to have 14 pixels of padding in style.css and run your code.

Observe how the red boxes at the bottom of the page changed.
Checkpoint 3 Step instruction is unavailable until previous steps are completed

3.

Set the top and bottom padding of h2 elements to 20 pixels and set the left and right padding of h2 elements to 30 pixels.
