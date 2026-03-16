export type BlogCategory = 'Market Update' | 'Seller Tips' | 'Buyer Tips' | 'Relocation'

export interface BlogSection {
  type: 'paragraph' | 'h2' | 'ul'
  text?: string
  items?: string[]
}

export interface BlogPost {
  slug: string
  title: string
  date: string
  category: BlogCategory
  excerpt: string
  readTime: string
  content: BlogSection[]
}

export const categoryColors: Record<BlogCategory, string> = {
  'Market Update': 'bg-teal/10 text-teal',
  'Seller Tips': 'bg-gold/15 text-amber-700',
  'Buyer Tips': 'bg-sage/15 text-sage',
  'Relocation': 'bg-charcoal/10 text-charcoal',
}

export const posts: BlogPost[] = [
  {
    slug: 'northern-colorado-market-update-q1-2026',
    title: 'Northern Colorado Real Estate Market Update — Q1 2026',
    date: 'March 10, 2026',
    category: 'Market Update',
    excerpt:
      'What buyers and sellers need to know about the Northern Colorado market heading into spring 2026 — inventory, pricing trends, and what to expect.',
    readTime: '5 min read',
    content: [
      {
        type: 'paragraph',
        text: "As we move into spring 2026, the Northern Colorado real estate market is showing the kind of resilience that has defined this region for years. Demand remains strong across Fort Collins, Loveland, Windsor, and Timnath — while inventory, though improved from 2024 lows, is still tight in the most desirable price ranges.",
      },
      {
        type: 'h2',
        text: 'What Inventory Looks Like Right Now',
      },
      {
        type: 'paragraph',
        text: "Active listings across Larimer and Weld counties have increased modestly compared to Q1 2025, which is good news for buyers who felt locked out last year. However, well-priced homes in the $400K–$600K range — the sweet spot for most buyers in this market — are still moving quickly. Days on market for that segment average around 18–25 days, compared to 40+ days for homes priced above $700K.",
      },
      {
        type: 'h2',
        text: 'Pricing Trends',
      },
      {
        type: 'paragraph',
        text: "Median home prices across Northern Colorado have held steady, with modest appreciation of roughly 3–4% year-over-year. Fort Collins continues to command the highest prices in the region, while Greeley and Wellington offer meaningful value for buyers who need more purchasing power. Timnath and Windsor remain popular with buyers coming from Denver who are looking for newer construction and more space.",
      },
      {
        type: 'h2',
        text: 'Interest Rates and Buyer Activity',
      },
      {
        type: 'paragraph',
        text: "Rates have settled into a range that buyers are increasingly accepting as the new normal. We're seeing buyers who sat on the sidelines in 2024 come back with urgency — particularly families relocating from higher-cost metro areas where Northern Colorado still represents significant value. If you've been waiting for rates to drop dramatically before buying, the risk of waiting is that prices continue to rise while you wait.",
      },
      {
        type: 'h2',
        text: 'What This Means for Sellers',
      },
      {
        type: 'paragraph',
        text: "If you're thinking about selling in 2026, spring remains one of the best windows. Buyer activity peaks March through June, and well-presented homes priced correctly are still receiving multiple offers. The key word is \"priced correctly\" — overpricing in today's market leads to longer days on market and ultimately a lower final sale price than if you had priced it right from day one.",
      },
      {
        type: 'h2',
        text: 'What This Means for Buyers',
      },
      {
        type: 'paragraph',
        text: "Get your pre-approval in hand before you start shopping. In competitive price ranges, sellers want to see that you're ready to move. Work with a local agent who knows the neighborhoods and can help you act quickly when the right home comes up. If you're relocating from out of state, virtual tours and a trusted local agent become even more important.",
      },
      {
        type: 'paragraph',
        text: "Have questions about a specific city, price range, or neighborhood? Reach out — I'm happy to give you a personalized market update for exactly what you're looking for.",
      },
    ],
  },
  {
    slug: '7-things-to-do-before-listing-your-home',
    title: '7 Things to Do Before You List Your Home in Northern Colorado',
    date: 'March 3, 2026',
    category: 'Seller Tips',
    excerpt:
      "Small preparation steps make a big difference in how quickly your home sells and what you net at closing. Here's what I tell every seller before we go live.",
    readTime: '6 min read',
    content: [
      {
        type: 'paragraph',
        text: "In a competitive market, first impressions determine whether a buyer schedules a showing or moves on. The difference between a home that sells in two weeks and one that sits for two months often comes down to preparation — not price. Here are the seven things I walk through with every seller before we list.",
      },
      {
        type: 'h2',
        text: '1. Declutter Aggressively',
      },
      {
        type: 'paragraph',
        text: "Buyers need to imagine their lives in your home, not look at yours. Go through every room and remove anything that doesn't need to be there. This includes excess furniture, personal photos, countertop appliances, seasonal decorations, and anything in closets that makes them look overstuffed. If you're not sure whether to remove something, remove it.",
      },
      {
        type: 'h2',
        text: '2. Deep Clean Everything',
      },
      {
        type: 'paragraph',
        text: "This goes beyond your normal cleaning routine. Baseboards, ceiling fans, window tracks, grout lines, the inside of appliances, and light switch plates all get noticed. Consider hiring a professional cleaning crew before photos are taken. It's one of the highest-ROI things you can do before listing.",
      },
      {
        type: 'h2',
        text: "3. Handle the Small Repairs You've Been Ignoring",
      },
      {
        type: 'paragraph',
        text: "That dripping faucet, the door that doesn't close quite right, the cracked outlet cover — buyers notice everything and interpret deferred maintenance as a red flag about the bigger systems in the home. Make a list and work through it. These fixes are usually inexpensive and prevent buyer objections during inspection.",
      },
      {
        type: 'h2',
        text: '4. Freshen the Paint',
      },
      {
        type: 'paragraph',
        text: "Fresh, neutral paint is one of the most cost-effective ways to make a home feel clean and updated. You don't need to repaint everything — focus on rooms with dark colors, heavy scuffs, or dated finishes. A warm gray or agreeable white in the main living areas goes a long way.",
      },
      {
        type: 'h2',
        text: '5. Boost Your Curb Appeal',
      },
      {
        type: 'paragraph',
        text: "The outside of your home is what buyers see first — both in person and in photos. Mow and edge the lawn, trim shrubs, add fresh mulch to beds, plant a few flowers if the season allows, and make sure the front door looks sharp. A new welcome mat and house numbers can make a surprisingly big difference.",
      },
      {
        type: 'h2',
        text: '6. Let in the Light',
      },
      {
        type: 'paragraph',
        text: "Open every blind and curtain, replace any burned-out bulbs with bright daylight bulbs, and turn on all the lights before showings and photos. Bright, light-filled photos perform dramatically better online and set the tone for how buyers feel when they walk in.",
      },
      {
        type: 'h2',
        text: '7. Have a Pre-Listing Strategy Conversation',
      },
      {
        type: 'paragraph',
        text: "Before you invest in any improvements, talk to your agent about which upgrades will actually impact your sale price versus which ones won't move the needle. Every house is different, and the goal is to spend money where it counts — not to over-improve beyond what the market supports. This conversation alone can save you thousands.",
      },
      {
        type: 'paragraph',
        text: "If you're thinking about selling your home in Northern Colorado and want a straight-talk conversation about what it's worth and how to prepare, I'm happy to walk through your home and give you honest, specific feedback — no obligation.",
      },
    ],
  },
  {
    slug: 'first-time-buyer-guide-northern-colorado',
    title: "A First-Time Buyer's Guide to Northern Colorado",
    date: 'February 24, 2026',
    category: 'Buyer Tips',
    excerpt:
      "Buying your first home is exciting and overwhelming in equal measure. Here's a straightforward guide to what the process looks like in Northern Colorado.",
    readTime: '7 min read',
    content: [
      {
        type: 'paragraph',
        text: "Buying your first home is one of the biggest financial decisions you'll make — and it's also one of the most rewarding. Northern Colorado is a fantastic place to do it: strong communities, good schools, outdoor lifestyle, and a real estate market that holds its value well. Here's what you need to know to get started.",
      },
      {
        type: 'h2',
        text: 'Step 1: Get Pre-Approved (Not Just Pre-Qualified)',
      },
      {
        type: 'paragraph',
        text: "Pre-approval and pre-qualification are not the same thing. A pre-qualification is a quick estimate based on unverified information. A pre-approval involves the lender actually pulling your credit, verifying income and assets, and issuing a real commitment. In a competitive market like Northern Colorado, sellers take pre-approved buyers seriously and pre-qualified buyers much less so. Do this before you start touring homes.",
      },
      {
        type: 'h2',
        text: 'Step 2: Understand What You Can Actually Afford',
      },
      {
        type: 'paragraph',
        text: "Your lender will tell you the maximum you can borrow. That number is not your budget. Factor in property taxes (which vary by county in Colorado), HOA fees if applicable, homeowner's insurance, and maintenance costs. A good rule of thumb: budget 1–2% of the home's value annually for maintenance. Leave yourself a financial cushion — don't spend every dollar of your pre-approval amount.",
      },
      {
        type: 'h2',
        text: 'Step 3: Know Your Priorities Before You Start Looking',
      },
      {
        type: 'paragraph',
        text: "Before you tour a single home, get clear on what actually matters to you. List your must-haves (things you genuinely can't compromise on), your nice-to-haves (things you'd love but could live without), and your deal-breakers. This keeps you from falling in love with the wrong house and helps your agent find the right options faster.",
      },
      {
        type: 'h2',
        text: 'Step 4: Choose the Right Neighborhood',
      },
      {
        type: 'paragraph',
        text: "In Northern Colorado, your neighborhood choice matters as much as the home itself. Fort Collins has a college-town energy with great restaurants and trails. Loveland is a bit quieter with strong arts and outdoor access. Windsor and Timnath offer newer construction and strong growth. Berthoud feels small-town with big future potential. Take time to understand each area before committing.",
      },
      {
        type: 'h2',
        text: 'Step 5: Make a Strong Offer',
      },
      {
        type: 'paragraph',
        text: "In competitive price ranges, you may be competing with other buyers. A strong offer isn't just about price — it includes a healthy earnest money deposit, a reasonable inspection period, flexibility on closing date, and a clean, well-organized contract. Your agent should know how to structure an offer that stands out without overpaying.",
      },
      {
        type: 'h2',
        text: "Step 6: Don't Skip the Inspection",
      },
      {
        type: 'paragraph',
        text: "No matter how much you love a home, always get a professional home inspection. This protects you from costly surprises and gives you negotiating power if real issues are found. In Colorado, the inspection objection period is your opportunity to request repairs, a price reduction, or simply walk away if the issues are too significant.",
      },
      {
        type: 'ul',
        items: [
          'Get pre-approved before looking at homes',
          'Budget beyond just the purchase price',
          'Know your must-haves before you start',
          'Research neighborhoods, not just houses',
          'Make clean, well-structured offers',
          'Never waive your inspection',
          'Stay in close communication with your agent and lender throughout',
        ],
      },
      {
        type: 'paragraph',
        text: "Buying your first home doesn't have to be stressful — it just takes the right preparation and the right guide. If you're thinking about buying in Northern Colorado, I'd love to walk you through the process and answer any questions you have.",
      },
    ],
  },
  {
    slug: 'why-families-relocate-northern-colorado-from-denver',
    title: 'Why Families Are Leaving Denver for Northern Colorado',
    date: 'February 17, 2026',
    category: 'Relocation',
    excerpt:
      "More and more families are trading the Denver metro for Northern Colorado. Here's what's driving the move and what they find when they get here.",
    readTime: '5 min read',
    content: [
      {
        type: 'paragraph',
        text: "Over the past several years, I've worked with dozens of families who made the move from Denver and its suburbs to Northern Colorado. The pattern is consistent: they leave because of cost, traffic, and crowding — and they stay because of community, space, and quality of life. Here's the full picture.",
      },
      {
        type: 'h2',
        text: 'The Denver Push',
      },
      {
        type: 'paragraph',
        text: "Denver has seen tremendous growth over the past decade, and with that growth has come higher home prices, increased density, traffic congestion that rivals much larger cities, and a cost of living that has priced many families out of the neighborhoods they once called home. For families looking for a yard, good schools, and a reasonable commute, the Denver metro has become increasingly difficult to justify.",
      },
      {
        type: 'h2',
        text: 'The Northern Colorado Pull',
      },
      {
        type: 'paragraph',
        text: "Northern Colorado offers something that's genuinely hard to find: space to breathe without sacrificing amenities. Fort Collins has all the restaurants, culture, and entertainment you'd expect from a larger city — but without the traffic and density. Loveland is quieter, more affordable, and has direct access to some of the best trails and open space in the state. Windsor and Timnath have grown rapidly because they offer newer homes at better prices with strong schools and a true neighborhood feel.",
      },
      {
        type: 'h2',
        text: 'What the Numbers Look Like',
      },
      {
        type: 'paragraph',
        text: "Depending on the specific neighborhoods compared, families moving from Denver to Loveland or Windsor often find they can get significantly more square footage, a larger lot, a newer home, and sometimes even better schools — for a comparable or lower price. That math is hard to ignore, especially for growing families who need space.",
      },
      {
        type: 'h2',
        text: 'The Commute Question',
      },
      {
        type: 'paragraph',
        text: "The most common concern I hear from Denver-area families considering the move is the commute. If you're working in Denver full-time, the drive north on I-25 is real — plan on 60–90 minutes depending on where you're going and when. But the rise of remote and hybrid work has changed this calculation dramatically. Many families are making this trade: a longer commute 1–2 days a week in exchange for a dramatically better quality of life every other day.",
      },
      {
        type: 'h2',
        text: 'What Families Find When They Arrive',
      },
      {
        type: 'ul',
        items: [
          'Neighbors who actually know each other',
          'Lower traffic and shorter local commutes',
          'More home for their money',
          'Strong, highly-rated school districts',
          'Rocky Mountain National Park less than an hour away',
          'A slower pace without giving up urban amenities',
          '300+ days of sunshine per year',
        ],
      },
      {
        type: 'paragraph',
        text: "Almost universally, the families I work with say the same thing after they've been here for six months: they wish they had made the move sooner. If you're in the Denver area and curious about what life in Northern Colorado actually looks like, I'd love to have that conversation. The move is more feasible than most people think.",
      },
    ],
  },
]

export function getPostBySlug(slug: string): BlogPost | undefined {
  return posts.find((p) => p.slug === slug)
}

export function getPostsByCategory(category: BlogCategory): BlogPost[] {
  return posts.filter((p) => p.category === category)
}
