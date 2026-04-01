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
    slug: 'what-its-really-like-to-live-in-northern-colorado-an-honest-',
    title: "What It’s Really Like to Live in Northern Colorado: An Honest Look at the Lifestyle",
    date: 'April 1, 2026',
    category: 'Relocation',
    excerpt: "Thinking about relocating to Northern Colorado? Here is a genuine look at the outdoor lifestyle, tight-knit communities, and everyday quality of life that make this region so hard to leave.",
    readTime: '7 min read',
    content: [
      {
        type: 'paragraph',
        text: "I get calls and emails every week from people across the country who are considering a move to Northern Colorado. They have seen the photos of the mountains, read about the craft beer scene, or heard from a friend that Fort Collins is one of the best places to live. And honestly, most of what they have heard is true. But there is more to the story than pretty scenery and good vibes, and I think you deserve the full picture before you pack up a moving truck.",
      },
      {
        type: 'h2',
        text: "The Outdoor Lifestyle Is Not Hype — It’s Everyday Life",
      },
      {
        type: 'paragraph',
        text: "One of the first things people notice after moving here is how naturally the outdoors weave into daily routines. This is not a place where you save outdoor adventures for vacation. It is where you mountain bike after work on a Tuesday, paddle board at Horsetooth Reservoir on a Saturday morning, or take a quick evening hike at Devil’s Backbone outside Loveland. The trail systems in and around Fort Collins, Loveland, Windsor, and Timnath are extensive, well-maintained, and genuinely used by locals year-round.",
      },
      {
        type: 'paragraph',
        text: "Northern Colorado gets roughly 300 days of sunshine a year, which means even in January you will likely find yourself outside more than you expected. Winter here is not the brutal, gray slog that people sometimes imagine. Yes, it snows, and yes, it gets cold. But storms tend to come and go, and you can often be back in a T-shirt within a day or two. If you ski or snowboard, you are about two hours from several world-class resorts. If you prefer cross-country skiing or snowshoeing, there are options much closer to home.",
      },
      {
        type: 'h2',
        text: "Community Feels Real Here",
      },
      {
        type: 'paragraph',
        text: "I have lived and worked in this area long enough to know that community is not just a marketing buzzword here. Fort Collins has a genuine downtown where you run into people you know. Loveland has a strong arts culture and a kind of neighborly warmth that is hard to fake. Windsor and Timnath have grown significantly, but they have managed to hold onto a small-town feel with strong schools and family-centered events. Berthoud is similar — a place where people wave at each other and actually mean it.",
      },
      {
        type: 'paragraph',
        text: "Farmers markets, local festivals, charity runs, and neighborhood gatherings are not occasional events. They are the rhythm of life here. People move to Northern Colorado and are often surprised by how quickly they feel connected. Whether it is through a running group, a church, a neighborhood Facebook group, or a volunteer organization, there are easy entry points into the community.",
      },
      {
        type: 'h2',
        text: "Quality of Life: What Day-to-Day Actually Looks Like",
      },
      {
        type: 'paragraph',
        text: "Day-to-day life in Northern Colorado has a balance that is hard to find in bigger metros. Commutes are generally reasonable. You can get across Fort Collins in about 15 to 20 minutes on most days. The food scene has grown tremendously, with everything from local taco shops to farm-to-table restaurants. And yes, the craft beer culture is very real — Fort Collins alone has dozens of breweries, and Loveland and Windsor are not far behind.",
      },
      {
        type: 'paragraph',
        text: "Families here tend to prioritize a few things that I think are worth highlighting:",
      },
      {
        type: 'ul',
        items: [
          "Access to strong public and private school options across the region",
          "Proximity to outdoor recreation without sacrificing urban conveniences",
          "A safer, slower pace compared to Denver or Boulder, while still having plenty to do",
          "A growing job market, especially in tech, healthcare, agriculture, and education",
          "A culture that genuinely values health, wellness, and work-life balance",
        ],
      },
      {
        type: 'h2',
        text: "The Honest Stuff: What to Be Aware Of",
      },
      {
        type: 'paragraph',
        text: "I would not be doing my job if I only told you the good parts. Northern Colorado has grown a lot, and with that growth comes real considerations. Home prices have increased significantly over the past decade, and inventory can be competitive depending on the season and price range. Traffic along the I-25 corridor, especially between Loveland and Fort Collins, has gotten heavier. And while the area is more affordable than Boulder or Denver, it is not the hidden bargain it was ten years ago.",
      },
      {
        type: 'paragraph',
        text: "That said, most people I work with who relocate here tell me the same thing after a year: they wish they had done it sooner. The trade-offs are real, but the lifestyle tends to outweigh the compromises.",
      },
      {
        type: 'h2',
        text: "Each Town Has Its Own Personality",
      },
      {
        type: 'paragraph',
        text: "One thing I always tell people is that Northern Colorado is not one-size-fits-all. Fort Collins has a college-town energy with a mature cultural scene. Loveland is artsy, welcoming, and a bit more laid-back. Windsor offers a newer, family-oriented suburban feel with excellent parks and schools. Timnath has become one of the fastest-growing communities in the state, attracting families who want new construction and top-rated schools. Berthoud has a quieter, more rural charm that appeals to people who want space and simplicity. Knowing which town fits your lifestyle is just as important as finding the right house.",
      },
      {
        type: 'h2',
        text: "Thinking About Making the Move?",
      },
      {
        type: 'paragraph',
        text: "If you are considering a relocation to Northern Colorado, I would love to be a resource for you — even if you are months or years away from making a decision. I am happy to answer questions about specific neighborhoods, towns, schools, or anything else that will help you get a real feel for the area. No pressure, no sales pitch. Just honest, local insight from someone who genuinely loves living and working here. Feel free to reach out anytime. I look forward to helping you figure out if Northern Colorado is the right fit.",
      },
    ],
  },
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
