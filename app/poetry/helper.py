import pyperclip

text = """
Nature's first green is gold,
Her hardest hue to hold.
Her early leaf's a flower;
But only so an hour.
Then leaf subsides to leaf.
So Eden sank to grief,
So dawn goes down to day.
Nothing gold can stay.
"""

new_text = ""
for line in text.strip().split("\n"):
	new_text += f"\"{line}\",\n"

pyperclip.copy(new_text.strip())