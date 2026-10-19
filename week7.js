const WEEK7 = {
  "id": "w7",
  "title": "String",
  "sub": "Indexing, slicing, formatting, string methods, transformation, split, and join",
  "concepts": [
    {
      "title": "Strings and string literals",
      "text": "A string is a sequence of characters. Text inside single or double quotation marks is a string literal."
    },
    {
      "title": "Positive indexing",
      "text": "Indexes from the left start at 0."
    },
    {
      "title": "Negative indexing",
      "text": "Indexes from the right start at -1 for the final character."
    },
    {
      "title": "Single-character access",
      "text": "One index retrieves the character at that position."
    },
    {
      "title": "Basic slicing",
      "text": "text[start:stop] includes start and stops before stop."
    },
    {
      "title": "Omitting the start",
      "text": "text[:stop] begins at the first character."
    },
    {
      "title": "Omitting the stop",
      "text": "text[start:] continues through the final character."
    },
    {
      "title": "Full slice",
      "text": "text[:] contains the entire string."
    },
    {
      "title": "Slice stride",
      "text": "text[start:stop:stride] uses stride to control the index increment. The default stride is 1."
    },
    {
      "title": "String immutability",
      "text": "Strings cannot be changed in place. A slice is a new string object."
    },
    {
      "title": "Reassignment and slices",
      "text": "Reassigning the original variable does not change a slice that was already created."
    },
    {
      "title": "Field width",
      "text": "A format width sets the minimum number of character positions used to display a value."
    },
    {
      "title": "Left alignment",
      "text": "< left-aligns a value within the field width."
    },
    {
      "title": "Right alignment",
      "text": "> right-aligns a value within the field width."
    },
    {
      "title": "Center alignment",
      "text": "^ centers a value within the field width."
    },
    {
      "title": "Fill characters",
      "text": "A character before the alignment symbol fills unused field positions."
    },
    {
      "title": "replace()",
      "text": "replace(old, new) creates a copy with matching substrings replaced. A count argument limits replacements."
    },
    {
      "title": "find(), rfind(), count()",
      "text": "find() locates the first match, rfind() the last match, and count() counts occurrences."
    },
    {
      "title": "Checks and transformations",
      "text": "isdigit(), isupper(), and islower() check text. lower(), upper(), strip(), and title() transform text."
    },
    {
      "title": "split() and join()",
      "text": "split() breaks a string into tokens. join() combines strings using a separator."
    }
  ],
  "examples": [
    {
      "title": "Example 1: Positive indexing",
      "code": "text = 'Hello'\nprint(text[1])",
      "text": "Index 1 is e."
    },
    {
      "title": "Example 2: Negative indexing",
      "code": "text = 'Hello'\nprint(text[-1])",
      "text": "Index -1 is o."
    },
    {
      "title": "Example 3: Basic slicing",
      "code": "text = 'Python'\nprint(text[1:4])",
      "text": "The output is yth."
    },
    {
      "title": "Example 4: Omitted start",
      "code": "text = 'en.wikipedia'\nprint(text[:5])",
      "text": "The output is en.wi."
    },
    {
      "title": "Example 5: Omitted stop",
      "code": "text = 'en.wikipedia'\nprint(text[2:])",
      "text": "The output is .wikipedia."
    },
    {
      "title": "Example 6: Full slice",
      "code": "text = 'en.wikipedia'\nprint(text[:])",
      "text": "The full string is displayed."
    },
    {
      "title": "Example 7: Stride",
      "code": "text = 'abcdefghij'\nprint(text[0:10:2])",
      "text": "The output is acegi."
    },
    {
      "title": "Example 8: Combining slices",
      "code": "a = 'Google'\nb = 'Wikipedia'\nprint(a[3:-1] + b[1:-3:2])",
      "text": "The slices are gl and iie, so the output is gliie."
    },
    {
      "title": "Example 9: Slice immutability",
      "code": "original = 'Hello World'\npiece = original[1:-3]\noriginal = 'Hi World'\nprint(piece)",
      "text": "piece remains ello Wo."
    },
    {
      "title": "Example 10: Field width",
      "code": "name = 'Bob'\nprint(f'|{name:8}|')",
      "text": "Bob is displayed in a minimum field width of 8."
    },
    {
      "title": "Example 11: Left alignment",
      "code": "word = 'Hi'\nprint(f'|{word:<6}|')",
      "text": "Padding is added to the right."
    },
    {
      "title": "Example 12: Right alignment",
      "code": "word = 'Hi'\nprint(f'|{word:>6}|')",
      "text": "Padding is added to the left."
    },
    {
      "title": "Example 13: Center alignment",
      "code": "word = 'Hi'\nprint(f'|{word:^6}|')",
      "text": "The value is centered."
    },
    {
      "title": "Example 14: Custom fill",
      "code": "symbol = '@'\nprint(f'{symbol:*^11}')",
      "text": "The output is *****@*****."
    },
    {
      "title": "Example 15: replace()",
      "code": "text = 'cat cat dog'\nprint(text.replace('cat','fox'))",
      "text": "The output is fox fox dog."
    },
    {
      "title": "Example 16: Limited replace",
      "code": "s = 'Python is fun, Python is powerful. But I like Python.'\nnew_s = s.replace('Python','Java',1)\nprint(new_s.count('Python'))",
      "text": "Two occurrences of Python remain."
    },
    {
      "title": "Example 17: find and rfind",
      "code": "text = 'banana'\nprint(text.find('an'))\nprint(text.rfind('an'))",
      "text": "The outputs are 1 and 3."
    },
    {
      "title": "Example 18: Text cleanup",
      "code": "name = '  BOB  '\nprint(name.strip().lower())",
      "text": "The output is bob."
    },
    {
      "title": "Example 19: split()",
      "code": "text = 'Hello   World'\nprint(text.split(' '))\nprint(text.split())",
      "text": "An explicit space can preserve empty tokens; split() ignores extra whitespace."
    },
    {
      "title": "Example 20: join()",
      "code": "parts = ['caius','palomo']\nprint(' '.join(parts))",
      "text": "The output is caius palomo."
    }
  ],
  "questions": [
    {
      "type": "programming",
      "topic": "positive indexing",
      "prompt": "What does this code print?\ntext = 'Hello'\nprint(text[2])",
      "options": [
        "H",
        "e",
        "l",
        "o"
      ],
      "correct": 2,
      "explain": "Index 2 is l."
    },
    {
      "type": "programming",
      "topic": "negative indexing",
      "prompt": "What does this code print?\ntext = 'Hello'\nprint(text[-2])",
      "options": [
        "H",
        "e",
        "l",
        "o"
      ],
      "correct": 2,
      "explain": "-2 is l."
    },
    {
      "type": "programming",
      "topic": "slicing",
      "prompt": "What does this code print?\ntext = 'Python'\nprint(text[1:5])",
      "options": [
        "Pyth",
        "ytho",
        "ython",
        "yth"
      ],
      "correct": 1,
      "explain": "The output is ytho."
    },
    {
      "type": "programming",
      "topic": "omitted start",
      "prompt": "What does this code print?\ntext = 'en.wikipedia'\nprint(text[:5])",
      "options": [
        "en.w",
        "en.wi",
        "n.wik",
        "en.wik"
      ],
      "correct": 1,
      "explain": "The output is en.wi."
    },
    {
      "type": "programming",
      "topic": "omitted stop",
      "prompt": "What does this code print?\ntext = 'en.wikipedia'\nprint(text[2:])",
      "options": [
        "en",
        "wikipedia",
        ".wikipedia",
        "n.wikipedia"
      ],
      "correct": 2,
      "explain": "The output is .wikipedia."
    },
    {
      "type": "programming",
      "topic": "stride",
      "prompt": "What does this code print?\ntext = 'abcdefghij'\nprint(text[0:10:2])",
      "options": [
        "abcdefghij",
        "acegi",
        "bdfhj",
        "abcde"
      ],
      "correct": 1,
      "explain": "The output is acegi."
    },
    {
      "type": "programming",
      "topic": "combined slices",
      "prompt": "What does this code print?\na = 'Google'\nb = 'Wikipedia'\nprint(a[3:-1] + b[1:-3:2])",
      "options": [
        "gliie",
        "gliki",
        "gleia",
        "gwiie"
      ],
      "correct": 0,
      "explain": "The output is gliie."
    },
    {
      "type": "programming",
      "topic": "immutability",
      "prompt": "What does this code print?\noriginal = 'Hello World'\npiece = original[1:-3]\noriginal = 'Hi World'\nprint(piece)",
      "options": [
        "i Wo",
        "ello Wo",
        "Hi World",
        "Hello World"
      ],
      "correct": 1,
      "explain": "The earlier slice remains ello Wo."
    },
    {
      "type": "programming",
      "topic": "alignment",
      "prompt": "Which format specification centers text in a field of width 10?",
      "options": [
        "<10",
        ">10",
        "^10",
        "10^"
      ],
      "correct": 2,
      "explain": "^ means center alignment."
    },
    {
      "type": "programming",
      "topic": "fill",
      "prompt": "What does this code print?\nsymbol = '@'\nprint(f'{symbol:*^5}')",
      "options": [
        "**@**",
        "@****",
        "****@",
        "*@***"
      ],
      "correct": 0,
      "explain": "The output is **@**."
    },
    {
      "type": "programming",
      "topic": "replace",
      "prompt": "What does this code print?\ntext = 'red red blue'\nprint(text.replace('red','green',1))",
      "options": [
        "green green blue",
        "green red blue",
        "red green blue",
        "red red green"
      ],
      "correct": 1,
      "explain": "Only the first match is replaced."
    },
    {
      "type": "programming",
      "topic": "find",
      "prompt": "What does this code print?\ntext = 'banana'\nprint(text.find('na'))",
      "options": [
        "1",
        "2",
        "3",
        "-1"
      ],
      "correct": 1,
      "explain": "The first na begins at index 2."
    },
    {
      "type": "programming",
      "topic": "count",
      "prompt": "What does this code print?\ntext = 'banana'\nprint(text.count('a'))",
      "options": [
        "2",
        "3",
        "4",
        "5"
      ],
      "correct": 1,
      "explain": "a occurs three times."
    },
    {
      "type": "programming",
      "topic": "transformation",
      "prompt": "What does this code print?\nname = '  BOB  '\nprint(name.strip().lower())",
      "options": [
        "  bob  ",
        "BOB",
        "bob",
        "Bob"
      ],
      "correct": 2,
      "explain": "The output is bob."
    },
    {
      "type": "programming",
      "topic": "split and join",
      "prompt": "What does this code print?\ntext = 'caius.palomo'\nparts = text.split('.')\nprint(' '.join(parts))",
      "options": [
        "caius.palomo",
        "caius palomo",
        "['caius', 'palomo']",
        "caius-palomo"
      ],
      "correct": 1,
      "explain": "The output is caius palomo."
    },
    {
      "type": "logic",
      "topic": "slice boundaries",
      "prompt": "For text[start:stop], which positions are included?",
      "options": [
        "start through stop, both included",
        "start through stop - 1",
        "start + 1 through stop",
        "Only start and stop"
      ],
      "correct": 1,
      "explain": "The stop position is excluded."
    },
    {
      "type": "logic",
      "topic": "immutability",
      "prompt": "Which statement about strings is correct?",
      "options": [
        "A string can be changed one character at a time",
        "Slicing changes the original string",
        "Strings are immutable, so slicing creates a new string",
        "Reassignment changes every earlier slice"
      ],
      "correct": 2,
      "explain": "Strings are immutable."
    },
    {
      "type": "logic",
      "topic": "find",
      "prompt": "What does find() return when the substring is absent?",
      "options": [
        "None",
        "0",
        "-1",
        "False"
      ],
      "correct": 2,
      "explain": "find() returns -1."
    },
    {
      "type": "logic",
      "topic": "split",
      "prompt": "How do split(' ') and split() differ with repeated spaces?",
      "options": [
        "They are always identical",
        "split(' ') can preserve empty tokens, while split() ignores extra whitespace",
        "split() returns a string",
        "split(' ') removes all spaces first"
      ],
      "correct": 1,
      "explain": "The explicit separator can produce empty tokens."
    },
    {
      "type": "logic",
      "topic": "join",
      "prompt": "What does join() do?",
      "options": [
        "Breaks a string into characters",
        "Finds the first match",
        "Creates a new string with a separator between input strings",
        "Changes the original string in place"
      ],
      "correct": 2,
      "explain": "join() combines strings with a separator."
    }
  ]
};
MODULES.push(WEEK7);
renderModuleList();
renderStudyTabs();
