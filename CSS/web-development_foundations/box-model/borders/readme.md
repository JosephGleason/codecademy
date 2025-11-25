Borders
6 min

A
border
Preview: Docs Shorthand property that sets different properties for an elements border in a single declaration.
is a line that surrounds an element, like a frame around a painting.
Borders
Preview: Docs Defines decorative lines around HTML elements to create visual separation and emphasis.
can be set with a specific
width
Preview: Docs Defines the width of an element's content area. The content area is the space inside the padding, border, and margin of the element.
, style, and
color
Preview: Docs Loading link description
:

    width—The thickness of the border. A border’s thickness can be set in pixels or with one of the following keywords: thin, medium, or thick.
    style—The design of the border. Web browsers can render any of 10 different styles. Some of these styles include: none, dotted, and solid.
    color—The color of the border. Web browsers can render
    colors
    Preview: Docs Loading link description
    using a few different formats, including 140 built-in color keywords.

p {
  border: 3px solid coral;
}

Copy to Clipboard

In the example above, the border has a width of 3 pixels, a style of solid, and a color of coral. All three properties are set in one line of code.

The default border is medium none color, where color is the current color of the element. If width, style, or color are not set in the CSS file, the web browser assigns the default value for that property.

p.content-header {
  height: 80px;
  width: 240px;
  border: solid coral;
}

Copy to Clipboard

In this example, the border style is set to solid and the color is set to coral. The border width is not set, so it defaults to medium.
Instructions

    Checkpoint 1 Passed

    1.

    Add a dotted red border with 1-pixel thickness to all h2 headings.

Checkpoint 2 Passed

2.

Add a solid, white border, with a 3 pixel width, to the #banner .content h1 rule.
