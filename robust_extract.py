import os
import PyPDF2
import sys

# Force utf-8 output
sys.stdout.reconfigure(encoding='utf-8')

# Find the file
pdf_file = None
for f in os.listdir('.'):
    # Match part of the known filename "كتاب سيزامات للسنة الأولى"
    # We can detect it loosely to avoid encoding mismatch
    if f.endswith('.pdf') and ('سيزامات' in f or 'الاولى' in f or 'الأولى' in f):
        pdf_file = f
        break

if not pdf_file:
    print("Could not identify specific file. Listing PDFs:")
    for f in os.listdir('.'):
        if f.endswith('.pdf'):
            print(f)
            
if pdf_file:
    print(f"Found file: {pdf_file}")
    try:
        with open(pdf_file, 'rb') as file:
            reader = PyPDF2.PdfReader(file)
            with open('pdf_content.txt', 'w', encoding='utf-8') as out:
                # Extract first 50 pages to cover typical first chapter
                for i in range(min(50, len(reader.pages))):
                    text = reader.pages[i].extract_text()
                    if text:
                        out.write(f"--- Page {i+1} ---\n")
                        out.write(text + "\n")
        print("Extraction complete to pdf_content.txt")
    except Exception as e:
        print(f"Error extracting: {e}")
else:
    print("No matching PDF found.")
