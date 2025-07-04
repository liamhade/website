import pyperclip

text = """
Some say the world will end in fire,
Some say in ice.
From what I’ve tasted of desire
I hold with those who favor fire.
But if it had to perish twice,
I think I know enough of hate
To say that for destruction ice
Is also great
And would suffice.
"""

new_text = ""
for line in text.strip().split("\n"):
	new_text += f"\"{line}\",\n"

pyperclip.copy(new_text.strip())