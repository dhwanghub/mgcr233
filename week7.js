const WEEK7 = {
  "id": "w7",
  "title": "String",
  "sub": "Indexing, slicing, formatting, string methods, transformation, split, and join",
  "concepts": [
    {
      "title": "Indexing",
      "text": "Strings are sequences. Positive indexes start at 0 from the left, and negative indexes start at -1 from the right."
    },
    {
      "title": "Slicing and immutability",
      "text": "text[start:stop:stride] creates a new string. The stop index is excluded, and the original string is not changed."
    },
    {
      "title": "String formatting",
      "text": "Field width controls minimum display width. Use < for left, > for right, ^ for center, and an optional fill character before the alignment symbol."
    },
    {
      "title": "String methods",
      "text": "replace(), find(), rfind(), and count() help search and modify text. String checks and transformations include isdigit(), isupper(), lower(), strip(), and related methods."
    },
    {
      "title": "Split and join",
      "text": "split() breaks a string into a list of tokens. join() creates a new string by placing a separator between strings."
    }
  ],
  "examples": [
    {
      "title": "Example 1: Indexing and slicing",
      "code": "text = 'Hello World'\nprint(text[1])\nprint(text[1:5])",
      "text": "Index 1 is e. The slice from 1 to 5 stops before index 5, so it prints ello."
    },
    {
      "title": "Example 2: Stride and immutability",
      "code": "text = 'abcdefghij'\npiece = text[0:10:2]\ntext = 'xyz'\nprint(piece)",
      "text": "The slice selects indices 0, 2, 4, 6, and 8, producing acegi. Reassigning text later does not change piece."
    },
    {
      "title": "Example 3: Width, alignment, and fill",
      "code": "symbol = '@'\nprint(f'{symbol:*^11}')",
      "text": "The @ is centered in width 11 and the unused positions are filled with *, producing *****@*****."
    },
    {
      "title": "Example 4: Find, replace, and count",
      "code": "s = 'Python is fun, Python is powerful.'\nnew_s = s.replace('Python', 'Java', 1)\nprint(new_s.find('Python'))\nprint(new_s.count('Python'))",
      "text": "Only the first Python is replaced. The remaining Python can still be found and counted."
    },
    {
      "title": "Example 5: Split and join",
      "code": "email = 'caius.palomo@mail.mcgill.ca'\nname = email.split('@')[0]\nparts = name.split('.')\nprint(' '.join(parts))",
      "text": "The email is split to isolate caius.palomo, then split again at the period and joined with a space to produce caius palomo."
    }
  ],
  "questions": [
    {
      "type": "programming",
      "topic": "slicing with stride",
      "prompt": "What does this code print?\ntext = 'Programming'\nprint(text[1:-2:2])",
      "options": [
        "rgam",
        "roamn",
        "rorm",
        "ogram"
      ],
      "correct": 0,
      "explain": "The slice starts at index 1, stops before index -2, and takes every second character, producing rgam."
    },
    {
      "type": "programming",
      "topic": "negative indexing and stride",
      "prompt": "What does this code print?\ntext = 'Wikipedia'\nprint(text[1:-2:2])",
      "options": [
        "iie",
        "ikpd",
        "iea",
        "ikip"
      ],
      "correct": 0,
      "explain": "The selected positions are 1, 3, and 5, which contain i, i, and e."
    },
    {
      "type": "programming",
      "topic": "designing a slice",
      "prompt": "Given text = 'Programming', which expression produces 'gram'?",
      "options": [
        "text[2:6]",
        "text[3:7]",
        "text[3:6]",
        "text[4:8]"
      ],
      "correct": 1,
      "explain": "Indices 3 through 6 contain g, r, a, and m. The stop index 7 is excluded."
    },
    {
      "type": "programming",
      "topic": "immutability and reassignment",
      "prompt": "What does this code print?\noriginal = 'abcdef'\npart = original[1:5]\noriginal = original.replace('c', 'X')\nprint(part, original)",
      "options": [
        "bXde abXdef",
        "bcde abXdef",
        "bcde abcdef",
        "bXde abcdef"
      ],
      "correct": 1,
      "explain": "part was created before original was reassigned, so part remains bcde while original becomes abXdef."
    },
    {
      "type": "programming",
      "topic": "replace and count",
      "prompt": "What does this code print?\ntext = 'Python Python Python'\nnew_text = text.replace('Python', 'Java', 2)\nprint(new_text.count('Python'))",
      "options": [
        "0",
        "1",
        "2",
        "3"
      ],
      "correct": 1,
      "explain": "Only the first two occurrences are replaced, so one Python remains."
    },
    {
      "type": "programming",
      "topic": "find with boundaries",
      "prompt": "What does this code print?\ntext = 'banana bandana'\nprint(text.find('ana', 2, 8))",
      "options": [
        "1",
        "3",
        "8",
        "-1"
      ],
      "correct": 1,
      "explain": "The search begins at index 2 and stops before index 8. The first ana within that search range begins at index 3."
    },
    {
      "type": "programming",
      "topic": "rfind",
      "prompt": "What does this code print?\ntext = 'banana bandana'\nprint(text.rfind('ana'))",
      "options": [
        "3",
        "8",
        "11",
        "-1"
      ],
      "correct": 2,
      "explain": "rfind() returns the starting index of the last occurrence. The final ana begins at index 11."
    },
    {
      "type": "programming",
      "topic": "split with explicit separator",
      "prompt": "What does this code print?\ntext = 'a  b   c'\nprint(text.split(' '))",
      "options": [
        "['a', 'b', 'c']",
        "['a', '', 'b', '', '', 'c']",
        "['a  b   c']",
        "['a', ' ', 'b', ' ', 'c']"
      ],
      "correct": 1,
      "explain": "Using one explicit space as the separator preserves empty strings created by repeated spaces."
    },
    {
      "type": "programming",
      "topic": "split and join",
      "prompt": "What does this code print?\ntext = 'a  b   c'\nparts = text.split()\nprint(':'.join(parts))",
      "options": [
        "a::b:::c",
        "a:b:c",
        "a b c",
        "['a', 'b', 'c']"
      ],
      "correct": 1,
      "explain": "split() without an explicit separator ignores extra whitespace, producing three tokens. join() inserts one colon between them."
    },
    {
      "type": "programming",
      "topic": "method chaining",
      "prompt": "Which expression converts '  mcGILL university  ' into 'Mcgill University'?",
      "options": [
        "text.strip().lower().title()",
        "text.lower().strip()",
        "text.title().lower().strip()",
        "text.strip().upper().title()"
      ],
      "correct": 0,
      "explain": "strip() removes surrounding spaces, lower() normalizes the case, and title() capitalizes each word."
    },
    {
      "type": "programming",
      "topic": "formatting with fill",
      "prompt": "What does this code print?\nword = 'Hi'\nprint(f'{word:*^8}')",
      "options": [
        "***Hi***",
        "**Hi****",
        "Hi******",
        "******Hi"
      ],
      "correct": 0,
      "explain": "Hi uses 2 positions in a width of 8, leaving 6 padding positions. Center alignment places 3 asterisks on each side."
    },
    {
      "type": "programming",
      "topic": "minimum field width",
      "prompt": "What does this code print?\nword = 'Python'\nprint(f'|{word:4}|')",
      "options": [
        "|Pyth|",
        "|Python|",
        "|  Python|",
        "|Python  |"
      ],
      "correct": 1,
      "explain": "Field width is a minimum, not a maximum. A six-character value is not truncated to fit width 4."
    },
    {
      "type": "programming",
      "topic": "choosing a format specification",
      "prompt": "Which expression displays Data as ___Data___?",
      "options": [
        "f'{word:_<10}'",
        "f'{word:_>10}'",
        "f'{word:_^10}'",
        "f'{word:^_10}'"
      ],
      "correct": 2,
      "explain": "The fill character _ comes before the center-alignment symbol ^, and width 10 leaves three underscores on each side of Data."
    },
    {
      "type": "programming",
      "topic": "split and join pipeline",
      "prompt": "Given email = 'caius.palomo@mail.mcgill.ca', which code produces 'caius palomo'?",
      "options": [
        "' '.join(email.split('@'))",
        "' '.join(email.split('@')[0].split('.'))",
        "'.'.join(email.split('@')[0].split('.'))",
        "email.split('.')[0]"
      ],
      "correct": 1,
      "explain": "The text before @ is caius.palomo. Splitting that at the period creates two name parts, and joining them with a space produces caius palomo."
    },
    {
      "type": "programming",
      "topic": "replace followed by count",
      "prompt": "What does this code print?\ntext = 'banana'\nchanged = text.replace('a', 'o', 2)\nprint(changed.count('o'))",
      "options": [
        "1",
        "2",
        "3",
        "4"
      ],
      "correct": 1,
      "explain": "Only the first two a characters are replaced by o, so the resulting string contains two o characters."
    },
    {
      "type": "logic",
      "topic": "slice boundaries",
      "prompt": "A student wants characters at indexes 2, 3, 4, and 5. Which slice correctly follows Python's start and stop rules?",
      "options": [
        "text[2:5]",
        "text[2:6]",
        "text[1:5]",
        "text[3:6]"
      ],
      "correct": 1,
      "explain": "The start index is included and the stop index is excluded, so stop must be 6 to include index 5."
    },
    {
      "type": "logic",
      "topic": "immutability",
      "prompt": "A slice is stored in piece, and the original string variable is later reassigned. Which statement best explains why piece does not change?",
      "options": [
        "Slices automatically track the newest value of the original variable",
        "A slice creates a separate string object before the later reassignment",
        "Reassignment edits every string object that shares characters",
        "Strings become mutable after slicing"
      ],
      "correct": 1,
      "explain": "Slicing creates a new string object. Reassigning the original variable changes what that variable refers to, not the already-created slice."
    },
    {
      "type": "logic",
      "topic": "field width",
      "prompt": "A string has 7 characters and is formatted with width 4. What should you expect?",
      "options": [
        "The string is truncated to 4 characters",
        "Python raises an error",
        "The full 7-character string is displayed",
        "Only the first 4 characters are aligned"
      ],
      "correct": 2,
      "explain": "Field width specifies a minimum display width. If the value is already wider, Python displays the full value."
    },
    {
      "type": "logic",
      "topic": "split semantics",
      "prompt": "Why can split(' ') and split() produce different results for text containing repeated spaces?",
      "options": [
        "split(' ') treats every single space as a separator and can create empty tokens",
        "split() always keeps every space as a token",
        "split(' ') removes repeated spaces before splitting",
        "split() converts the result back to a string"
      ],
      "correct": 0,
      "explain": "With an explicit single-space separator, each separator is processed individually, so adjacent spaces can create empty strings. split() groups whitespace."
    },
    {
      "type": "logic",
      "topic": "find versus count",
      "prompt": "If substring x does not appear in text, which pair of results is consistent with find(x) and count(x)?",
      "options": [
        "find(x) = 0, count(x) = -1",
        "find(x) = -1, count(x) = 0",
        "find(x) = None, count(x) = 0",
        "find(x) = False, count(x) = -1"
      ],
      "correct": 1,
      "explain": "find() uses -1 to indicate no match, while count() reports zero occurrences."
    }
  ]
};
MODULES.push(WEEK7);
renderModuleList();
renderStudyTabs();
