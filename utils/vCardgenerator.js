export function generateVCard(employee) {
    return `
  BEGIN:VCARD
  VERSION:3.0
  FN:${employee.name}
  TEL:${employee.whatsapp}
  EMAIL:${employee.email}
  END:VCARD
    `.trim();
  }
  