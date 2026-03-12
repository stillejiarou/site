import os

IGNORE_DIRS = {"node_modules", "_site", "img", ".git", "util"}
IGNORE_FILES = set()

def is_text_file(path):
    try:
        with open(path, "r", encoding="utf-8") as f:
            f.read()
        return True
    except:
        return False

def collect_files(root=".."):
    for dirpath, dirnames, filenames in os.walk(root):
        dirnames[:] = [d for d in dirnames if d not in IGNORE_DIRS]

        for name in filenames:
            if name in IGNORE_FILES:
                continue
            yield os.path.join(dirpath, name)

def main():
    SCRIPT_DIR = os.path.dirname(os.path.abspath(__file__))
    output_file = os.path.join(SCRIPT_DIR, "project_status.txt")

    with open(output_file, "w", encoding="utf-8") as out:
        for path in collect_files(".."):
            if os.path.abspath(path) == os.path.abspath(output_file):
                continue

            if is_text_file(path):
                out.write(f"\n\n----- FILE: {path} -----\n\n")
                with open(path, "r", encoding="utf-8") as f:
                    out.write(f.read())

    print(f"Done. Combined content written to {output_file}")

if __name__ == "__main__":
    main()
