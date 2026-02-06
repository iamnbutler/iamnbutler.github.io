/**
 * Upload remaining content (projects + work) to PDS.
 * Usage: ATP_PASSWORD=... npx tsx scripts/upload-remaining.ts [--dry-run]
 */
import { AtpAgent } from '@atproto/api';

const HANDLE = process.env.ATP_HANDLE || 'nate.rip';
const PASSWORD = process.env.ATP_PASSWORD;
const DRY_RUN = process.argv.includes('--dry-run');
if (!PASSWORD && !DRY_RUN) { console.error('Set ATP_PASSWORD env var'); process.exit(1); }

// Projects as posts (chronological order for fragment IDs)
const projects = [
  {
    fragmentId: 41,
    title: 'iOS 11 Backgrounds – fb.design',
    createdAt: '2016-01-01T00:00:00.000Z',
    content: `In 2016 we released the iOS 11 GUI on facebook.design as a continuation of the GUI resources started by [Teehan & Lax](https://teehanlax.com/). I worked on the Photoshop resources, and also designed a series of abstract 3D backgrounds that were used in the GUI promo materials.

![The iOS 11 GUI on facebook.design](https://raw.githubusercontent.com/iamnbutler/iamnbutler.github.io/main/src/content/projects/ios11-gui/ios-11-gui-fb-design.png)

![GUI Previews](https://raw.githubusercontent.com/iamnbutler/iamnbutler.github.io/main/src/content/projects/ios11-gui/ios-11-gui-previews-fb-design.png)

![Wallpaper Previews](https://raw.githubusercontent.com/iamnbutler/iamnbutler.github.io/main/src/content/projects/ios11-gui/made-for-motion-fb-design.png)

We also distributed these separately as a wallpaper pack.`,
  },
  {
    fragmentId: 42,
    title: 'Design Docs',
    createdAt: '2021-01-01T00:00:00.000Z',
    content: `![Design Docs Home](https://raw.githubusercontent.com/iamnbutler/iamnbutler.github.io/main/src/content/projects/design-docs/design-docs-home.png)

An open source design doc site focused on helping early career designers and new grads on their journey into the design industry.

[Go to Design Docs](https://www.designdocs.co/) · [GitHub](https://github.com/iamnbutler/design-docs)`,
  },
  {
    fragmentId: 43,
    title: 'Mixblocks',
    createdAt: '2021-04-10T00:00:00.000Z',
    content: `![Mixblocks thumbnail](https://res.cloudinary.com/yaminateo/image/upload/v1637124653/project/mixblocks/thumbnail-2x1_yyknqu.jpg)

## The Concept

Inspired by a project a friend did recently about a display that reacts to your music, I started exploring *mixblocks.* A creation & remix tool focused around collaborative creation through the sharing of 'blocks.'

While Mixblocks has a feed of creations that you can grab and remix from, it has no likes, no connected identities, and no custom user names.

![Mixblocks branding](https://res.cloudinary.com/yaminateo/image/upload/v1637124910/project/mixblocks/Frame_28_mjppaj.png)

![Mixblocks branding exploration](https://res.cloudinary.com/yaminateo/image/upload/v1637124910/project/mixblocks/CleanShot_-_2021-11-16_at_23.49.48_2x_gy2rcd.png)
(Some branding exploration fun)

## Joining Mixblocks

When joining mixblocks, a creator is assigned a randomly generated name & profile image, which they can regenerate any amount of times. This generated name becomes the pseudonym that they create under. Mixblocks focuses on creation from the beginning–not social presence or clout.

### New Person Flow

The new person flow for mixblocks focuses on getting you in and creating as soon as possible. You can only create an account with your phone number or a secure auth. Mixblocks wants to know as little about you as possible.

## Your First Block

Dropping into the app for the first time, you will walk through creating your first block. This can be a lightblock or a soundblock, but you have to create something to enter the rest of the app.

You can walk through your first block guided (think the first level of Sound Shapes) or choose to jump straight into creation.

## Remixing & Sharing

More coming soon!

## Importing & Exporting

More coming soon!

## Beyond Digital

Take your blocks and run with them – Mixblocks is built from the ground up for use with hacker and maker tools like Arduino, LED Matrixes, etc. Write your own custom integrations, or grab from one that already exists...`,
  },
];

// Work history as a single list
const workList = {
  fragmentId: 44,
  title: 'Work',
  createdAt: '2025-01-01T00:00:00.000Z',
  content: `## Zed Industries
**Lead Designer** · 2021–Present

We're building the first collaboration-first code editor – Ex-atom founders and a whole score of talented folks are getting together to build you the best code editor you could imagine.

## Facebook
**Product Designer** · 2015–2021

Worked on teams like News Feed, Developer Experience, Productivity Tools & Facebook Stories.

## Format
**Design Consultant** · 2014

Designed a more friendly way for people to create the layouts they want on their creative portfolios by using prebuilt mix-and-match blocks.

## LOOKBOOK
**Designer & Developer** · 2013–2014

Worked on product for fashion in a pre-Instagram world. Designed upload flows, homepages, profiles, navigation. Front end web design & development.

## York University
**Web Developer** · 2011–2013

Designed and managed home pages, navigation, information architecture and individual pages for the new sites of the York University Design & Fine Arts Programs.`,
};

async function main() {
  let agent: AtpAgent | null = null;
  if (!DRY_RUN) {
    agent = new AtpAgent({ service: 'https://bsky.social' });
    await agent.login({ identifier: HANDLE, password: PASSWORD! });
    console.log(`Logged in as ${HANDLE}\n`);
  } else {
    console.log('[dry-run mode]\n');
  }

  // Upload projects as posts
  console.log('Uploading projects as posts...');
  for (const p of projects) {
    if (!DRY_RUN) {
      const res = await agent!.com.atproto.repo.createRecord({
        repo: agent!.session!.did,
        collection: 'rip.nate.post',
        record: {
          $type: 'rip.nate.post',
          fragmentId: p.fragmentId,
          title: p.title,
          content: p.content,
          createdAt: p.createdAt,
        },
      });
      console.log(`  #${p.fragmentId} "${p.title}" → ${res.data.uri} (${p.content.length} chars)`);
    } else {
      console.log(`  [dry-run] #${p.fragmentId} "${p.title}" (${p.content.length} chars)`);
    }
    await new Promise(r => setTimeout(r, 100));
  }

  // Upload work as a list
  console.log('\nUploading work history as list...');
  if (!DRY_RUN) {
    const res = await agent!.com.atproto.repo.createRecord({
      repo: agent!.session!.did,
      collection: 'rip.nate.list',
      record: {
        $type: 'rip.nate.list',
        fragmentId: workList.fragmentId,
        title: workList.title,
        content: workList.content,
        createdAt: workList.createdAt,
      },
    });
    console.log(`  #${workList.fragmentId} "${workList.title}" → ${res.data.uri} (${workList.content.length} chars)`);
  } else {
    console.log(`  [dry-run] #${workList.fragmentId} "${workList.title}" (${workList.content.length} chars)`);
  }

  console.log('\nDone. Total new fragments: 4 (#41-#44)');
}

main().catch(e => { console.error(e); process.exit(1); });
