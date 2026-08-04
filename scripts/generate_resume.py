from pathlib import Path

from reportlab.lib import colors
from reportlab.lib.pagesizes import A4
from reportlab.lib.styles import ParagraphStyle, getSampleStyleSheet
from reportlab.lib.units import cm
from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer, Table, TableStyle

root = Path(__file__).resolve().parents[1]
output = root / "public" / "Mallikarjuna_Gangula_Resume.pdf"

styles = getSampleStyleSheet()
styles.add(ParagraphStyle(name="Name", parent=styles["Title"], fontName="Helvetica-Bold", fontSize=23, leading=28, textColor=colors.HexColor("#0B3B3F"), spaceAfter=5))
styles.add(ParagraphStyle(name="Role", parent=styles["Normal"], fontName="Helvetica-Bold", fontSize=11, leading=15, textColor=colors.HexColor("#16847D"), spaceAfter=8))
styles.add(ParagraphStyle(name="Section", parent=styles["Heading2"], fontName="Helvetica-Bold", fontSize=11, leading=14, textColor=colors.HexColor("#0B3B3F"), spaceBefore=12, spaceAfter=6))
styles.add(ParagraphStyle(name="Body", parent=styles["Normal"], fontName="Helvetica", fontSize=9.5, leading=14, textColor=colors.HexColor("#283B3D")))
styles.add(ParagraphStyle(name="Item", parent=styles["Body"], leftIndent=9, firstLineIndent=-7, bulletIndent=0, spaceAfter=3))

doc = SimpleDocTemplate(str(output), pagesize=A4, rightMargin=1.8 * cm, leftMargin=1.8 * cm, topMargin=1.5 * cm, bottomMargin=1.5 * cm)
story = []
story += [Paragraph("Mallikarjuna Gangula", styles["Name"]), Paragraph("Frontend Developer | Staticval", styles["Role"]), Paragraph("LinkedIn: linkedin.com/in/mallikarjunagangula", styles["Body"]), Spacer(1, 10)]
story += [Paragraph("PROFILE", styles["Section"]), Paragraph("Frontend developer focused on creating responsive, accessible, and visually polished web interfaces. Strong foundation in React, JavaScript, HTML, CSS, and component-based UI development.", styles["Body"])]
story += [Paragraph("EXPERIENCE", styles["Section"]), Paragraph("Frontend Developer | Staticval | Present", styles["Body"]), Paragraph("Develop modern, responsive frontend interfaces with focus on usability, visual consistency, and dependable implementation.", styles["Item"], bulletText="-"), Spacer(1, 5), Paragraph("Frontend Development Intern | Cognifyz Technologies | Nov 2025 - Dec 2025", styles["Body"]), Paragraph("Built responsive web interfaces with HTML, CSS, JavaScript, and React, including reusable UI components.", styles["Item"], bulletText="-")]
story += [Paragraph("PROJECTS", styles["Section"]), Paragraph("Blockchain AI Data Security", styles["Body"]), Paragraph("Secure data-storage system with encrypted authentication and a blockchain-inspired audit trail. Stack: Python, Flask, SQLite.", styles["Item"], bulletText="-"), Paragraph("Mourya Pizza", styles["Body"]), Paragraph("Responsive restaurant website focused on clear menus, mobile-friendly layouts, and easy discovery. Stack: HTML, CSS, Responsive UI.", styles["Item"], bulletText="-")]
story += [Paragraph("SKILLS", styles["Section"]), Paragraph("React, JavaScript, TypeScript, Tailwind CSS, HTML5, CSS3, Responsive UI, Git & GitHub, REST APIs, Bootstrap, Node.js, MongoDB", styles["Body"])]
story += [Paragraph("CERTIFICATIONS", styles["Section"]), Paragraph("ICRCSET 2025 | AWS Cloud Virtual Internship | Digital Productivity", styles["Body"])]
story += [Paragraph("EDUCATION", styles["Section"]), Paragraph("Education details available on request.", styles["Body"])]
doc.build(story)
print(output)
