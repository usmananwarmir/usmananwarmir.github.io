#!/usr/bin/env python3
"""Remove Cursor / AI co-author lines from stdin commit message."""
import sys

SKIP = (
    "co-authored-by: cursor",
    "made-with: cursor",
)

def main() -> None:
    msg = sys.stdin.read()
    lines = [
        line
        for line in msg.splitlines(True)
        if not any(s in line.lower() for s in SKIP)
    ]
    out = "".join(lines).rstrip("\n") + "\n"
    sys.stdout.write(out)

if __name__ == "__main__":
    main()
