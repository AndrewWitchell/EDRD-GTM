# EDRD Project Structure Documentation
**Version:** 1.0  
**Created:** October 20, 2025, 23:15:00  
**Purpose:** Define the canonical file structure and update workflow

---

## PROJECT FILE STRUCTURE

This document defines the **single source of truth** for how the EDRD project is organized and how files should be updated.

### Core Principle
**Update existing files, don't create new ones.** Each document type has ONE current version. When updates are needed, version the old file with a timestamp, then update the current file.

---

## THE 13 CORE FILES

### 1. **PROJECT-STRUCTURE.md** (this file)
**Purpose:** Defines how the project is organized  
**When to update:** When file structure changes  
**Current version:** `PROJECT-STRUCTURE.md`  
**Archived versions:** `PROJECT-STRUCTURE-YYYYMMDD-HHMMSS.md`

### 2. **PROJECT-INSTRUCTIONS.md**
**Purpose:** Master strategy, principles, and high-level approach  
**When to update:** When core strategy or principles change  
**Current version:** `PROJECT-INSTRUCTIONS.md`  
**Archived versions:** `PROJECT-INSTRUCTIONS-YYYYMMDD-HHMMSS.md`

**Contains:**
- Project overview and problem statement
- Key principles and values (Level 5 Builder philosophy)
- Customer segments identified
- Conversion funnel architecture
- Technical stack
- Case studies framework
- Key reminders for Claude

### 3. **WBS.md** (Work Breakdown Structure)
**Purpose:** Complete task list with status tracking  
**When to update:** Daily/per session as tasks progress  
**Current version:** `WBS.md`  
**Archived versions:** `WBS-YYYYMMDD-HHMMSS.md`

**Contains:**
- 8 phases with all sub-tasks
- Status markers (Ã¢Å“â€¦ Ã°Å¸Å¡Â§ Ã¢Â¬Å“ Ã°Å¸â€Â´)
- Current sprint focus
- Blocked items list
- Dependencies

### 4. **BUILD-LOG.md**
**Purpose:** Complete project history with insights and session summaries  
**When to update:** End of each session  
**Current version:** `BUILD-LOG.md`  
**Archived versions:** `BUILD-LOG-YYYYMMDD-HHMMSS.md`

**Contains:**
- Project origin story
- Session-by-session summaries (what was built, insights, breakthroughs)
- Key learning moments
- What worked and why
- Evolution of thinking over time

### 5. **CLARIFYING-QUESTIONS.md**
**Purpose:** 94 questions for Eliana with answer tracking  
**When to update:** As Eliana provides answers  
**Current version:** `CLARIFYING-QUESTIONS.md`  
**Archived versions:** `CLARIFYING-QUESTIONS-YYYYMMDD-HHMMSS.md`

**Contains:**
- 94 questions organized by category
- Answer status tracking
- Eliana's responses (as provided)
- Follow-up questions generated from answers

### 6. **JTBD-RESEARCH.md**
**Purpose:** Complete customer research and JTBD analysis  
**When to update:** After each interview or major insight  
**Current version:** `JTBD-RESEARCH.md`  
**Archived versions:** `JTBD-RESEARCH-vX-X-YYYYMMDD-HHMMSS.md` (uses semantic versioning)

**Contains:**
- Customer segments (currently 6)
- Job stories (currently 29)
- Underserved needs (currently 47, prioritized)
- Restraining forces (currently 7 categories)
- Transcript analyses and insights
- Future research plans

### 7. **LEAD-MAGNET-STRATEGY.md**
**Purpose:** Lead magnet and CTA waterfall strategy  
**When to update:** As power offers are developed and tested  
**Current version:** `LEAD-MAGNET-STRATEGY.md`  
**Archived versions:** `LEAD-MAGNET-STRATEGY-YYYYMMDD-HHMMSS.md`

**Contains:**
- Lead magnet mapped to each JTBD
- CTA waterfall architecture (Power Ã¢â€ â€™ Secondary Ã¢â€ â€™ Tertiary)
- Buyer stage alignment
- Search queries mapped to offers
- Testing results and winners

### 8. **CONTENT-ASSETS.md**
**Purpose:** Library of all created content ready for deployment  
**When to update:** When new content is created or published  
**Current version:** `CONTENT-ASSETS.md`  
**Archived versions:** `CONTENT-ASSETS-YYYYMMDD-HHMMSS.md`

**Contains:**
- EDRD content (landing pages, emails, ads, case studies)
- Level 5 Builder content (side quest materials)
- Published vs. in-production vs. planned
- Content performance tracking

### 9. **CASE-STUDIES.md** (Added Oct 20, 2025)
**Purpose:** Comprehensive case study framework and development roadmap  
**When to update:** As case studies are developed and published  
**Current version:** `CASE-STUDIES.md`  
**Archived versions:** `CASE-STUDIES-YYYYMMDD-HHMMSS.md`

**Contains:**
- Top 10 presenting complaint scenarios identified from patient data
- Grand rounds format template (8-section structure)
- Dual-audience approach (healthcare professional + lay-person)
- Production workflow and review process
- Strategic prioritization (3 tiers)
- Patient data analysis and insights
- Success metrics and business impact
- Questions for Eliana re: data access and privacy

### 10. **EDRD-WEBSITE-PRD.md** (Added Oct 20, 2025)
**Purpose:** Complete Product Requirements Document for website development with Claude Code  
**When to update:** As technical specifications evolve or design decisions are made  
**Current version:** `EDRD-WEBSITE-PRD.md`  
**Archived versions:** `EDRD-WEBSITE-PRD-vX-X-YYYYMMDD-HHMMSS.md` (uses semantic versioning)

**Contains:**
- Executive summary (vision, success metrics, project context)
- Technical architecture (Next.js, Vercel, integrations)
- Complete information architecture (50+ page sitemap)
- Design system specifications (typography, colors, components)
- Content strategy & LLM optimization principles
- Phase-by-phase feature development roadmap
- Integration requirements (Thinkific, email, analytics)
- Testing & QA checklists
- Deployment strategy
- Success criteria & KPIs
- Risk management
- Open questions & blockers

### 11. **SITEMAP-STRATEGY_1.md** (Added Oct 20, 2025)
**Purpose:** Complete website architecture and LLM-first sitemap specification  
**When to update:** When sitemap structure changes or pages are added/removed  
**Current version:** `SITEMAP-STRATEGY_1.md`  
**Archived versions:** `SITEMAP-STRATEGY_vX-YYYYMMDD-HHMMSS.md` (uses semantic versioning)

**Contains:**
- Complete 50+ page sitemap structure
- LLM-first architecture principles
- Technical implementation requirements (schema.org, llms.txt)
- Content strategy per page type
- URL structure and naming conventions
- Conversion tracking architecture
- SEO/GEO strategy by buyer stage
- Build priorities and phasing

### 12. **GLP1-CONTENT-STRATEGY.md** (Added Oct 20, 2025)
**Purpose:** Complete GLP-1 medication support content strategy and market opportunity  
**When to update:** As GLP-1 content is created or strategy evolves  
**Current version:** `GLP1-CONTENT-STRATEGY.md`  
**Archived versions:** `GLP1-CONTENT-STRATEGY-YYYYMMDD-HHMMSS.md`

**Contains:**
- Market opportunity analysis (15M+ patients on GLP-1s)
- Content strategy (30+ blog posts mapped to buyer stages)
- Lead magnet specifications (calculator, meal plans, trackers)
- Email nurture sequences
- B2B2C healthcare provider outreach strategy
- 12-week content production roadmap
- LLM optimization checklist
- Keyword research and SEO strategy

### 13. **COPY-REFERENCE-GUIDE.md** (Added Oct 20, 2025)
**Purpose:** Copy-paste ready messaging for cortisol language and key positioning  
**When to update:** When messaging evolves or new copy variations are needed  
**Current version:** `COPY-REFERENCE-GUIDE.md`  
**Archived versions:** `COPY-REFERENCE-GUIDE-YYYYMMDD-HHMMSS.md`

**Contains:**
- Cortisol language variations (10+ versions)
- Three Critical Elements messaging
- Copy placement guide (where each variation goes)
- Tone and voice examples
- Key phrases and terminology standards

---

## REFERENCE MATERIALS (Not versioned)

### PDFs and Source Documents
- `Aug_2025_High_Protein_Diet_Handout_part_1of2.pdf`
- `Aug_2025_High_Protein_Diet_Handout_part_2of2.pdf`
- `Why_your_LLM_Search_Strategy_is_As_Important_As_IP_or_Regulatory__TopCitationStatus_in_AI_Results.pdf`
- Additional interview transcripts as uploaded

These are source materials and should not be modified or versioned.

---

## VERSIONING WORKFLOW

### When to Create a New Version

**Before major updates:**
1. Copy current file to timestamped archive
2. Update the current file
3. Note what changed in BUILD-LOG.md

**Example:**
```bash
# Before updating WBS
cp WBS.md WBS-20251020-231500.md

# Update WBS.md with new information

# Add entry to BUILD-LOG.md noting what changed
```

### Version Naming Convention

**Format:** `FILENAME-YYYYMMDD-HHMMSS.md`

**Examples:**
- `WBS-20251020-231500.md`
- `JTBD-RESEARCH-v2-0-20251025-140000.md`
- `BUILD-LOG-20251020-231500.md`

### Semantic Versioning (for major updates)

Use for JTBD-RESEARCH when framework fundamentally changes:
- `JTBD-RESEARCH-v1-0-YYYYMMDD-HHMMSS.md` (initial version)
- `JTBD-RESEARCH-v2-0-YYYYMMDD-HHMMSS.md` (after Eliana's answers integrated)
- `JTBD-RESEARCH-v3-0-YYYYMMDD-HHMMSS.md` (after all 6 interviews complete)

---

## UPDATE WORKFLOW PER SESSION

### At Start of Session:
1. Read `PROJECT-STRUCTURE.md` (this file)
2. Read `PROJECT-INSTRUCTIONS.md` for context
3. Read `WBS.md` for current tasks
4. Read `BUILD-LOG.md` (last 2-3 entries) for recent context
5. Read `website/.claude.md` for technical standards and commit requirements

### During Session:
- Update `WBS.md` as tasks progress
- Take notes of insights for BUILD-LOG
- Create/update content in appropriate file

### At End of Session:
1. **Update WBS.md** with final status
2. **Update BUILD-LOG.md** (REQUIRED for every commit) including:
   - What was built
   - Key insights/breakthroughs
   - What worked and why
   - Next steps
   - Commit hash
3. **Update PROJECT-STRUCTURE.md** if file structure or workflow changed
4. **Version any heavily updated files** (create timestamped copy before next session)
5. **Update PROJECT-INSTRUCTIONS.md** if strategy changed
6. **Provide download links** for all updated files

### 🚨 CRITICAL: Pre-Commit Checklist

**BEFORE EVERY GIT COMMIT:**

- [ ] BUILD-LOG.md updated with session summary
- [ ] PROJECT-STRUCTURE.md updated if needed
- [ ] Code changes tested locally (`npm run build` passes)
- [ ] All files formatted (`npm run format`)
- [ ] Commit message follows format (see website/.claude.md)

**Why This Matters:**
- BUILD-LOG.md is the single source of truth for project history
- Prevents lost context between sessions
- Enables proper handoffs and continuity
- Documents evolution of decisions

See `website/.claude.md` for complete commit requirements and standards.

---

## FILE RELATIONSHIP MAP

```
PROJECT-STRUCTURE.md (meta - defines this structure)
    ↓
PROJECT-INSTRUCTIONS.md (strategy & principles)
    ↓
├─ SITEMAP-STRATEGY_1.md (complete website architecture)
├─ GLP1-CONTENT-STRATEGY.md (GLP-1 market opportunity)
└─ COPY-REFERENCE-GUIDE.md (messaging & positioning)
    ↓
EDRD-WEBSITE-PRD.md (technical implementation blueprint)
    ↓
WBS.md (execution plan)
    ↓
BUILD-LOG.md (history & insights)
    ↓
├─ JTBD-RESEARCH.md (customer insights)
├─ LEAD-MAGNET-STRATEGY.md (conversion strategy)
├─ CASE-STUDIES.md (content framework)
├─ CONTENT-ASSETS.md (deliverables)
└─ CLARIFYING-QUESTIONS.md (collaboration with Eliana)
```

**Dependencies:**
- SITEMAP-STRATEGY_1.md depends on JTBD-RESEARCH.md + buyer stage mapping
- GLP1-CONTENT-STRATEGY.md depends on JTBD-RESEARCH.md + market analysis
- COPY-REFERENCE-GUIDE.md depends on Three Critical Elements analysis
- EDRD-WEBSITE-PRD.md depends on SITEMAP-STRATEGY_1.md + GLP1-CONTENT-STRATEGY.md + COPY-REFERENCE-GUIDE.md
- LEAD-MAGNET-STRATEGY depends on JTBD-RESEARCH
- CONTENT-ASSETS depends on LEAD-MAGNET-STRATEGY
- CASE-STUDIES.md depends on JTBD-RESEARCH + patient data
- WBS tracks progress across all files
- BUILD-LOG captures evolution of all files

---

---

## DECISION RULES

### Should I create a new file?
**NO** - Update an existing file unless:
- It's a new interview transcript (upload as PDF/text)
- It's a completely new deliverable type not covered by the 13 core files
- It's a reference document (PDF, source material)

### Should I version the current file?
**YES** - Create timestamped version if:
- Making significant updates (>50% of content changing)
- Before major strategy shifts
- At phase transitions (Phase 1 Ã¢â€ â€™ Phase 2)
- Weekly snapshot for audit trail

**NO** - Just update in place if:
- Minor updates (status changes, small additions)
- Daily task tracking
- Adding one new insight or section
- Fixing typos or formatting

### Which file does this belong in?
Use this decision tree:

```
Is it about HOW we work? → PROJECT-STRUCTURE.md
Is it about WHAT we're building and WHY? → PROJECT-INSTRUCTIONS.md
Is it WEBSITE ARCHITECTURE or SITEMAP? → SITEMAP-STRATEGY_1.md
Is it GLP-1 CONTENT STRATEGY? → GLP1-CONTENT-STRATEGY.md
Is it MESSAGING or COPY standards? → COPY-REFERENCE-GUIDE.md
Is it TECHNICAL SPECS for website? → EDRD-WEBSITE-PRD.md
Is it a TASK with status? → WBS.md
Is it project HISTORY or an INSIGHT? → BUILD-LOG.md
Is it a QUESTION for Eliana? → CLARIFYING-QUESTIONS.md
Is it CUSTOMER RESEARCH? → JTBD-RESEARCH.md
Is it a LEAD MAGNET or OFFER? → LEAD-MAGNET-STRATEGY.md
Is it a CASE STUDY (framework or content)? → CASE-STUDIES.md
Is it FINISHED CONTENT? → CONTENT-ASSETS.md
Is it a SOURCE DOCUMENT? → Keep as separate PDF/file
```

---

## ARCHIVE MANAGEMENT

### When to Archive
- After each phase completion (creates snapshot)
- Monthly (for long-running projects)
- Before major pivots or strategy changes

### Archive Structure
```
/project/
Ã¢â€Å“Ã¢â€â‚¬ [8 current files - no timestamps]
Ã¢â€â€Ã¢â€â‚¬ /archive/
    Ã¢â€Å“Ã¢â€â‚¬ /phase-1/
    Ã¢â€â€š   Ã¢â€Å“Ã¢â€â‚¬ WBS-20251020-225112.md
    Ã¢â€â€š   Ã¢â€Å“Ã¢â€â‚¬ BUILD-LOG-20251020-225112.md
    Ã¢â€â€š   Ã¢â€â€Ã¢â€â‚¬ JTBD-RESEARCH-v1-0-20251020-225112.md
    Ã¢â€Å“Ã¢â€â‚¬ /phase-2/
    Ã¢â€â€š   Ã¢â€â€Ã¢â€â‚¬ [Phase 2 completion snapshots]
    Ã¢â€â€Ã¢â€â‚¬ /deprecated/
        Ã¢â€â€Ã¢â€â‚¬ [Old files being phased out]
```

---

## WORKING WITH CLAUDE

### Claude's Session Checklist

**Start of session:**
- [ ] Read PROJECT-STRUCTURE.md
- [ ] Read PROJECT-INSTRUCTIONS.md
- [ ] Check WBS.md for current tasks
- [ ] Review last 2 BUILD-LOG entries

**During session:**
- [ ] Update WBS.md status markers as work progresses
- [ ] Take notes for BUILD-LOG summary
- [ ] Update appropriate content files

**End of session:**
- [ ] Update WBS.md with final status
- [ ] Add session summary to BUILD-LOG.md
- [ ] Version any heavily-modified files
- [ ] Provide download links for updated files
- [ ] Note any new blockers or dependencies

### Context Loading Efficiency

**For quick questions:** Load PROJECT-INSTRUCTIONS.md only  
**For task work:** Load WBS.md + relevant content file  
**For strategy work:** Load PROJECT-INSTRUCTIONS.md + JTBD-RESEARCH.md  
**For new sessions:** Load all 8 files (establish full context)  

---

## STATUS TRACKING

### Task Status Markers (in WBS.md)
- Ã¢Å“â€¦ **Complete** - Work is done and validated
- Ã°Å¸Å¡Â§ **In Progress** - Currently being worked on
- Ã¢Â¬Å“ **Not Started** - On roadmap but not begun
- Ã°Å¸â€Â´ **Blocked** - Cannot proceed (note blocker in comments)

### File Update Status (in BUILD-LOG.md)
Track which files were modified each session:
```markdown
## Session [N]: [Title] ([Date])
**Files updated:**
- Ã¢Å“ÂÃ¯Â¸Â WBS.md (status updates)
- Ã¢Å“ÂÃ¯Â¸Â JTBD-RESEARCH.md (2 new job stories added)
- Ã°Å¸â€œÂ¦ CONTENT-ASSETS.md (LinkedIn post added)
```

---

## QUALITY CHECKS

### Before Ending a Session

**Completeness check:**
- [ ] All work is captured in appropriate file
- [ ] WBS status reflects actual progress
- [ ] BUILD-LOG has session summary
- [ ] No orphaned insights or decisions

**Version check:**
- [ ] Significant updates are timestamped
- [ ] Current files have no timestamps
- [ ] Archive is organized if needed

**Handoff check:**
- [ ] Next steps are clear in WBS
- [ ] Blockers are documented
- [ ] Questions for Eliana are logged
- [ ] Download links provided

---

## COMMON PITFALLS TO AVOID

### Ã¢ÂÅ’ DON'T:
- Create new files for session updates (use BUILD-LOG.md)
- Leave timestamps on current working files
- Store insights in chat without documenting
- Update files without noting in BUILD-LOG
- Create duplicate content across files
- Make new files for "quick reference" (consolidate instead)

### Ã¢Å“â€¦ DO:
- Update existing files with new information
- Archive timestamped versions before major changes
- Capture all insights in BUILD-LOG
- Keep current files clean (no timestamps)
- Reference other files by name (clear dependencies)
- Consolidate related content in appropriate files

---

## MIGRATION FROM OLD STRUCTURE

### Files Being Consolidated

**Old structure (12 files):**
- PROJECT-INSTRUCTIONS.md Ã¢Å“â€¦
- edrd-wbs-20251020-225112.md Ã¢â€ â€™ WBS.md
- level5-builder-build-log-20251020-225112.md Ã¢â€ â€™ BUILD-LOG.md
- jtbd-framework-update-from-transcripts.md Ã¢â€ â€™ JTBD-RESEARCH.md
- clarifying-questions-for-eliana.md Ã¢â€ â€™ CLARIFYING-QUESTIONS.md
- lead-magnet-tools-from-jtbd.md Ã¢â€ â€™ LEAD-MAGNET-STRATEGY.md
- level-5-builder-persona-framework.md Ã¢â€ â€™ CONTENT-ASSETS.md (side quest section)
- linkedin-post-level5-builder-v6-FINAL.md Ã¢â€ â€™ CONTENT-ASSETS.md (published)
- session-5-summary-20251020-225112.md Ã¢â€ â€™ BUILD-LOG.md (archived session)
- session-6-case-studies-update-20251020-225112.md Ã¢â€ â€™ BUILD-LOG.md (archived session)
- linkedin-post-level5-builder.md Ã¢â€ â€™ DELETE (superseded by FINAL)

**New structure (8 files):**
- PROJECT-STRUCTURE.md (NEW)
- PROJECT-INSTRUCTIONS.md (updated)
- WBS.md (renamed, no timestamp)
- BUILD-LOG.md (renamed, no timestamp, includes sessions)
- CLARIFYING-QUESTIONS.md (renamed, no timestamp)
- JTBD-RESEARCH.md (renamed, no timestamp)
- LEAD-MAGNET-STRATEGY.md (renamed, no timestamp)
- CONTENT-ASSETS.md (NEW, consolidates persona + post)

### Migration Checklist
- [ ] Create PROJECT-STRUCTURE.md (this file)
- [ ] Create 7 other core files with current content
- [ ] Verify all content is preserved
- [ ] Move old files to /archive/
- [ ] Update PROJECT-INSTRUCTIONS.md to reference new structure
- [ ] Test workflow with new structure

---

## SUCCESS METRICS

### This structure is working if:
- Ã¢Å“â€¦ Can find any piece of information in <30 seconds
- Ã¢Å“â€¦ No confusion about "which version is current"
- Ã¢Å“â€¦ New sessions start quickly (clear context loading)
- Ã¢Å“â€¦ No duplicate information across files
- Ã¢Å“â€¦ Easy to see what's changed since last session
- Ã¢Å“â€¦ Clear handoff between Andrew and Claude
- Ã¢Å“â€¦ Eliana can review only what's relevant to her

### Red flags that structure needs adjustment:
- Ã°Å¸Å¡Â© Creating "quick reference" files frequently
- Ã°Å¸Å¡Â© Searching multiple files for same information
- Ã°Å¸Å¡Â© Version confusion (multiple "current" files)
- Ã°Å¸Å¡Â© Insights lost in chat history
- Ã°Å¸Å¡Â© Taking >5 minutes to load context
- Ã°Å¸Å¡Â© Duplicate tracking in multiple places

---

## FUTURE SCALABILITY

### When Project Grows
If files become too large (>500 lines), consider:

**JTBD-RESEARCH.md** could split into:
- JTBD-RESEARCH-FRAMEWORK.md (segments, jobs, needs)
- JTBD-RESEARCH-INTERVIEWS.md (transcript analyses)

**CONTENT-ASSETS.md** could split into:
- CONTENT-ASSETS-EDRD.md (main project)
- CONTENT-ASSETS-LEVEL5.md (side quest)

**WBS.md** stays unified (critical for tracking)

**BUILD-LOG.md** stays unified (critical for history)

### When to Create Sub-Projects
If a section becomes its own project:
- B2B2C Healthcare Network Ã¢â€ â€™ own project structure
- Institutional Training Ã¢â€ â€™ own project structure
- Level 5 Builder Ã¢â€ â€™ own project structure

Each gets its own 8-file structure.

---

## VERSION HISTORY

### v1.0 - October 20, 2025, 23:15:00
- Initial structure documentation
- Defined 13 core files
- Established versioning workflow
- Created decision rules and quality checks
- Documented migration from 12-file structure

---

**Status:** Active structure definition  
**Next Review:** After 5 sessions with new structure  
**Owner:** Andrew (with Claude as execution partner)

---

## APPENDIX: Quick Reference Commands

### Check Current Structure
```bash
ls -lh /mnt/project/*.md | grep -v archive
# Should show exactly 13 .md files (no timestamps)
```

### Create Version Before Major Update
```bash
cp WBS.md WBS-$(date +%Y%m%d-%H%M%S).md
# Then update WBS.md
```

### Find All Versions of a File
```bash
ls -lh /mnt/project/archive/**/WBS-*.md
```

### Verify No Duplicate Content
```bash
grep -r "specific phrase" /mnt/project/*.md
# Should appear in only ONE file
```

---

**Remember: This structure exists to serve the work, not the other way around. If it's not working, we adapt it.**
