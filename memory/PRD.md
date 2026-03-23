# Km Chemicals - Bitumen Manufacturing Company Website

## Project Overview
**Company Name:** Km Chemicals  
**Industry:** Bitumen Manufacturing / Infrastructure Materials  
**Project Type:** Premium B2B Lead Generation Website  
**Started:** March 23, 2026  

---

## Original Problem Statement
Create a premium, modern, and high-conversion website for a Bitumen Manufacturing Company with:
- Black and gold theme (#0B0B0B and #D4AF37)
- 6 main pages: Home, About, Products, Lab & Plant, Certifications, Contact
- Professional B2B focus targeting contractors and infrastructure companies
- Modern fonts (Montserrat/Poppins)
- Industrial, trustworthy, and premium tone
- Lead generation focused with WhatsApp integration

---

## Tech Stack
- **Frontend:** React 19, TailwindCSS, Shadcn UI Components
- **Backend:** FastAPI (Python) - To be implemented
- **Database:** MongoDB - To be implemented
- **Styling:** Black (#0B0B0B) + Gold (#D4AF37) theme
- **Typography:** Montserrat (headings), Poppins (body)
- **Icons:** Lucide React

---

## User Personas
1. **Infrastructure Contractors:** Decision-makers seeking bulk bitumen for road projects
2. **Construction Companies:** Engineers and procurement managers needing reliable suppliers
3. **Government PWD/NHAI Officials:** Quality-conscious buyers requiring certified materials
4. **Industrial Buyers:** Manufacturing facilities needing specialized bitumen products

---

## Core Requirements (Static)

### Design Requirements
✓ Black and gold premium theme  
✓ Modern, bold typography  
✓ Smooth animations and hover effects  
✓ Mobile responsive design  
✓ Industrial and professional aesthetics  
✓ Gold accents only for highlights, buttons, borders  
✓ NO dark colorful gradients (following design guidelines)  

### Functional Requirements
✓ 6 pages: Home, About, Products, Lab & Plant, Certifications, Contact  
✓ Sticky navigation with active state  
✓ WhatsApp floating button  
✓ Contact form with validation  
✓ Product categorization and filtering  
✓ Smooth scrolling and transitions  

---

## What's Been Implemented ✅

### Phase 1: Frontend with Mock Data (March 23, 2026)

**Pages Created:**
1. **Home Page:**
   - Hero section with construction background image
   - Stats showcase (25+ years, 500+ projects, 50000+ tons capacity)
   - Product categories preview (3 cards)
   - Applications section (Road Construction, Waterproofing, Industrial)
   - Strong CTA sections

2. **About Us Page:**
   - Company introduction with industrial images
   - Mission and Vision cards
   - Core values (Quality, Customer Focus, Innovation, Reliability)
   - Company milestones timeline (1998-2023)
   - Plant capacity overview

3. **Products Page:**
   - Sticky category filter navigation
   - 7 product categories with detailed listings:
     - Bitumen Emulsion (RS-1, RS-2, SS-1, SS-2, MS)
     - VG Grade Bitumen (VG-10, VG-30)
     - Penetration Grade (70/80)
     - PMB (76-10 E)
     - CRMB (50, 55, 60)
     - Oxidized/Blown Bitumen (85/25)
     - Standard Industrial Bitumen
   - Product cards with applications

4. **Lab & Plant Page:**
   - Laboratory section with testing facilities
   - Quality testing parameters (8 key tests)
   - Manufacturing plant overview
   - Facility image gallery

5. **Certifications Page:**
   - ISO 9001:2015, ISO 14001:2015
   - IS Standards compliance
   - Government approvals (PWD, NHAI)
   - Standards showcase (IS 8042, IS 73, IS 15462, IRC SP-53, MORTH, NHAI)

6. **Contact Page:**
   - Contact information cards (Phone, Email, Location)
   - Quote request form (Name, Email, Phone, Requirements)
   - Google Maps integration
   - Business hours display

**Components Created:**
- Navbar (sticky, responsive, with mobile menu)
- Footer (4-column layout with links, products, contact)
- WhatsAppButton (floating with tooltip)

**Data Structure:**
- Mock data in `/app/frontend/src/data/mock.js`
- Default contact info (to be updated by user)

**Images:**
- 15 professional industrial images sourced
- Hero sections, products, lab/plant visuals

**Design Details:**
- Custom fonts: Montserrat + Poppins
- Smooth hover effects on all cards
- Gold border glow effects
- Minimal, clean card designs
- No dark colorful gradients used
- Proper color contrast throughout

---

## Prioritized Backlog

### P0 - Backend Implementation (Next Phase)
- [ ] Backend API development for contact form
- [ ] MongoDB schema for lead storage
- [ ] Email notification system for new leads
- [ ] Admin dashboard for lead management
- [ ] API endpoints: POST /api/contact, GET /api/leads

### P1 - Content & Configuration
- [ ] Update default contact information
- [ ] Add company logo (if available)
- [ ] Replace placeholder images with actual company photos
- [ ] Update certification numbers and documents
- [ ] Configure Google Maps with actual location

### P2 - Enhancements
- [ ] Blog section for industry insights
- [ ] Product specification PDF downloads
- [ ] Case studies / project showcase
- [ ] Testimonials from clients
- [ ] Product image gallery
- [ ] Live chat integration
- [ ] Analytics integration (Google Analytics)
- [ ] SEO optimization
- [ ] Multi-language support

### P3 - Advanced Features
- [ ] Product inquiry cart system
- [ ] Real-time pricing calculator
- [ ] Client portal for orders tracking
- [ ] Automated quote generation
- [ ] Payment gateway integration

---

## Next Tasks

### Immediate (Now):
1. ✅ Frontend with mock data completed
2. ✅ Design review and screenshot verification

### Next Steps:
1. User to review and provide feedback on design
2. Update contact details and company-specific content
3. Backend development:
   - Contact form API
   - Lead storage in MongoDB
   - Email notifications
4. Testing and deployment

---

## API Contracts (To Be Implemented)

### POST /api/contact
**Request:**
```json
{
  "name": "string",
  "email": "string",
  "phone": "string",
  "requirement": "string"
}
```
**Response:**
```json
{
  "success": true,
  "message": "Thank you! We'll contact you within 24 hours.",
  "lead_id": "uuid"
}
```

### GET /api/leads (Admin only)
**Response:**
```json
{
  "leads": [
    {
      "id": "uuid",
      "name": "string",
      "email": "string",
      "phone": "string",
      "requirement": "string",
      "created_at": "timestamp"
    }
  ]
}
```

---

## Notes
- Contact form currently works with frontend-only mock functionality
- Form submission shows success message but doesn't persist data
- WhatsApp button links to default number (to be updated)
- All images are from professional stock sources (Unsplash/Pexels)
- Design follows strict guidelines: no dark gradients, gold accents only
- Mobile-responsive design implemented throughout
