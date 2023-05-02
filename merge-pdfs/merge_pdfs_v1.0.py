from pypdf import PdfMerger
import tkinter as tk
from tkinter import filedialog
from tkinter import simpledialog
from tkinter import messagebox
import os

root = tk.Tk()
root.withdraw()

files = filedialog.askopenfilenames(title='Choose the pdfs to merge')
path = files[0].rsplit("/", 1)[0]
print(path)

merger = PdfMerger()

for pdf in files:
    merger.append(pdf)

output_name = simpledialog.askstring("New PDF Name", ".pdf (New PDF name)")

messagebox.showinfo("Your PDFs were merged!", output_name + ".pdf " + "can be found here: " + path)

merger.write(path + "/" + output_name + ".pdf")
merger.close()

os.startfile(path)

# You can convert this to an executable using pyinstaller -> pyinstaller --onefile --noconsole merge_pdfs_v1.0.py