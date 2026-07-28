# OneWill brand system

> Status: working source of truth  
> Public category: **Agent-World Boundary**
> Signature metaphor: **a compact pixel-art hamster running inside a transparent ball**

## 1. Brand at a glance

### Brand

**OneWill**

OneWill is always written as one word with a capital O and W. Do not abbreviate it or introduce a second public product name.

### Category

**Agent-World Boundary**

An Agent-World Boundary is a supervised runtime around an agent process. It captures the activity that crosses between the agent and its environment, turns that record into useful understanding, and controls how the agent affects the world.

### Audience

Primary:

- platform engineers adding agents to products or infrastructure;
- infrastructure engineers responsible for agent execution environments;
- product engineers trying to understand agent behavior in real workflows;
- teams operating agents that can read or mutate consequential state.

Secondary:

- technical power users running coding and computer-use agents;
- engineering leaders deciding how much autonomy to give agents;
- researchers and builders working on agent runtimes, evaluation, and governance.

### Core job

Reveal what an agent saw, did, and changed; show where the run became stuck or diverged; and mediate what happens next.

### Promise

**Complete activity capture and in-path control for every run launched through OneWill.**

“Complete” is always scoped to the surfaces captured by a OneWill-supervised session. It never means universal visibility into activity outside that boundary.

### Primary action

**Try the demo**

Secondary action: **See how it works →**

### Brand character

OneWill is a serious systems product with a small, strange, memorable character. It should feel technically exact, calm under pressure, candid about tradeoffs, and delighted by good machinery.

## 2. Brand thesis

### Know what your agents are doing

Agents are becoming users of software. They search, read, decide, type, call tools, change files, send requests, and move through product flows. Yet the people building and operating those systems often cannot answer basic questions:

- What did the agent see?
- What did it recommend?
- Which path did it take?
- Where did it stall or loop?
- Which action changed durable state?
- What can be recovered?
- What should require a person?

Application analytics can show a click. Model traces can show a call. An agent run crosses both—and then touches the world.

OneWill makes that run observable and governable by launching the agent inside a boundary it owns.

### Not a cage. A ball.

A cage limits where an agent can go. A ball lets it run while governing how it meets the world.

The hamsterball is not a sandbox metaphor. The agent still works with real files, applications, networks, interfaces, and state. The ball is the transparent execution boundary around that work:

- it controls what the agent can observe;
- it records the path the agent takes;
- it exposes where the run slows, loops, or fails;
- it mediates contact with durable state;
- it preserves enough information to recover when possible;
- it asks for a person only when reversibility runs out.

The agent keeps its agency. The operator gets legibility and control.

## 3. Manifesto

### 3.1 Wrap the agent, not every application

Instrumentation that depends on every model, tool, website, or agent framework cooperating will always have gaps. OneWill starts below that assumption: it creates and supervises the agent process.

The integration point is the run itself. An individual can launch an existing agent through OneWill. A provider can launch the same supervised session through a protocol. The agent does not need to become a OneWill-native agent first.

### 3.2 Record before interpreting

The durable activity record is primary. Dashboards, summaries, alerts, funnels, and evaluations are views derived from it.

Do not begin with an AI-generated explanation and work backward. Capture the underlying activity first, then make it understandable.

### 3.3 Observe causal paths, not isolated calls

A prompt, model response, command, file change, browser action, and API request are not unrelated events. They are parts of one run.

OneWill should preserve the context needed to move from an outcome back through the path that produced it:

`outcome ← world change ← action ← response ← observation`

The product should help answer not only “what happened?” but “what did the agent have available when it happened?”

### 3.4 Summaries come from the boundary record

Asking an agent to summarize itself is asking the subject of an incident to write the audit log from memory.

A OneWill guaranteed summary is derived from the independently captured activity stream of a OneWill-supervised session. It does not depend on the agent remembering every step, surviving context compaction, or accurately self-reporting its behavior.

The guarantee concerns the source record, not the infallibility of generated prose. Summaries must link back to the underlying activity they describe.

### 3.5 Control belongs before mutation

Post-hoc logs are useful for forensics. They do not stop a bad action.

OneWill sits in the execution path so that consequential activity can be recorded, classified, and mediated before its effects become durable. Control is not another prompt and does not depend on the agent agreeing to comply.

### 3.6 Automate the reversible; gate the irreversible

Human approval should be reserved for the moments where it changes the risk.

- **Reversible actions** can proceed when OneWill has enough information to restore the prior state.
- **Compensable actions** can proceed according to policy when a defined follow-up can repair the outcome, even if it cannot erase history.
- **Irreversible actions** require explicit approval before execution.

The goal is not approval for every step. The goal is autonomous work with principled escalation.

### 3.7 Freedom comes from a real boundary

Giving an agent more context makes it more useful and increases the consequences of failure. The answer is neither a blank environment nor blind trust.

A real boundary lets an agent move through consequential environments while giving operators a complete supervised-run record across supported capture surfaces, policy hooks, recovery primitives, and lifecycle control. The boundary expands the work that can be delegated safely.

## 4. Positioning and messaging

### Homepage message hierarchy

Eyebrow:

> AGENT BOUNDARY

Hero:

> Know what your agents are doing.

Support:

> OneWill launches agents inside a transparent boundary that captures what they see and do, shows where they get stuck, and controls what they can change.

Technical proof:

> Complete activity capture and in-path control for every run launched through OneWill.

Metaphor line:

> Not a cage. A ball.

Primary CTA: **Try the demo**  
Secondary CTA: **See how it works →**

### Positioning statement

For platform, infrastructure, and product engineers operating agents in consequential environments, OneWill is the Agent-World Boundary that makes complete supervised-run activity observable, understandable, and governable. Unlike model-call tracing or after-the-fact agent self-reporting, OneWill creates and supervises the process, captures activity at the agent–environment boundary, and mediates effects before they become durable.

### The three-part story

#### See the run

Capture the agent’s observations, exposed responses, actions, state changes, and lifecycle as one correlated activity stream.

#### Understand the run

Replay paths, inspect recommendations, identify stalls and loops, analyze outcomes, and generate summaries grounded in the captured record.

#### Control the run

Apply policy before mutation, request approval when reversibility runs out, interrupt or hand off execution, and recover state where the action semantics allow it.

### Supporting headlines

Use these as approved directions:

- Every agent leaves a trail.
- See the whole run.
- The record should not depend on the agent.
- Instrument once. Understand every supervised run.
- Find the step where the agent went sideways.
- Put control in the path of action.
- More autonomy. Fewer blind spots.
- Let the agent run. Keep the boundary.

Avoid claims such as “understand every thought,” “see the chain of thought,” or “control every agent everywhere.” OneWill observes exposed process activity and captured environment interactions, not hidden model reasoning.

### Use-case language

Product behavior:

- Measure which products an agent recommends for a query.
- See which result or tool the agent selects next.
- Find where agents abandon a signup or checkout flow.
- Compare successful and unsuccessful paths through the same task.
- Segment runs by agent, model, provider, environment, outcome, or policy decision when those attributes are captured.

Operations:

- Review what an agent did overnight.
- Reconstruct what the agent could see before a change.
- Identify loops, retries, stalls, and repeated failures.
- Produce a run summary from the captured activity record.
- Interrupt, resume, or hand off a supervised process.

Control and recovery:

- Allow changes that can be reversed.
- Define compensating actions for effects that cannot be cleanly undone.
- Require approval before irreversible actions.
- Compare before and after state.
- Rewind or repair according to the recorded action semantics.

## 5. Product model

### Two launch paths, one boundary

Direct user launch:

```text
user
  └─ onewill exec -- <agent command>
       └─ LaunchSession
            └─ OneWill creates and supervises the agent process
```

Provider launch:

```text
provider service
  └─ LaunchSession(command, configuration)
       ├─ process input/output
       ├─ lifecycle control
       └─ OneWill creates and supervises the agent process
```

Converged system:

```text
user CLI ────────────────┐
                         ├─ LaunchSession
provider integration ────┘       │
                                 ▼
                      OneWill-supervised process
                                 │
              ┌──────────────────┼──────────────────┐
              ▼                  ▼                  ▼
        per-user daemon   persistent mount   mediation boundary
              └──────────────────┼──────────────────┘
                                 ▼
                           activity APIs
```

The difference between the modes is who initiates the launch. OneWill—not the provider—creates and supervises the agent process in both modes.

Do not describe the provider integration as a passive callback SDK or a logging hook. The architectural point is process ownership at the boundary.

### Public activity model

| Stage | Meaning | Examples |
|---|---|---|
| **Observe** | Context exposed to the agent | visible files, tool results, interface state, allowed network responses |
| **Respond** | Agent or model output exposed to the runtime | messages, commands, structured tool requests, plans explicitly emitted by the agent |
| **Act** | Activity initiated by the process | file operations, subprocesses, network requests, tool calls, interface actions |
| **Change** | Durable effects on the environment | modified state, created artifacts, sent requests, persisted records |
| **Control** | Boundary decision or operator intervention | allow, block, approve, interrupt, reverse, compensate |
| **Outcome** | Run-level result | completion, failure, stall, interruption, rollback, handoff |

This vocabulary is public and should be consistent across website, product UI, docs, diagrams, and event names where practical.

### Guaranteed summaries

A guaranteed summary has three properties:

1. Its source is the captured activity stream of a OneWill-supervised session.
2. Its production does not depend on the agent remembering or volunteering what happened.
3. Its claims can link back to the relevant captured activity.

Do not imply that generated summaries are semantically perfect. The guarantee is that the summary is grounded in the boundary’s independent record.

### Recovery model

OneWill adapts database recovery ideas to agent actions:

- **Write-ahead record:** preserve enough recovery or approval information before an effect is allowed to become durable.
- **UNDO:** restore before-state for incomplete or aborted reversible work.
- **REDO:** reapply committed after-state when the system must make reality match a durable promise.
- **Compensation:** apply a new action that repairs an outcome that cannot literally be reversed.

This is the technical foundation, not the homepage category. Lead with observable agent activity and control; use database recovery to explain why the boundary is reliable.

### Claim boundaries

- Say “any supported command” or “any supported agent,” not “every agent,” when discussing compatibility.
- Scope complete capture to OneWill-supervised sessions and supported surfaces.
- Scope control to mediated effects.
- Scope rollback to reversible actions with captured recovery information.
- Describe compensable actions as repairable, not reversible.
- Do not claim access to hidden chain-of-thought.
- Keep exact agent, operating-system, and captured-surface support in documentation.

## 6. Voice and writing

### Voice

OneWill sounds like systems people explaining a strange but practical idea to other technical people.

The voice is:

- direct;
- precise;
- candid;
- a little irreverent;
- comfortable with real technical terms;
- more interested in mechanisms than adjectives.

The voice is not:

- compliance theater;
- fear-driven security marketing;
- enterprise abstraction;
- mascot narration;
- breathless AI futurism;
- vague about what is captured or enforced.

### Writing rules

1. Lead with the operator’s question: what did the agent do, why did the run diverge, and what can happen next?
2. Use “run,” “activity,” “boundary,” “record,” “path,” and “effect” consistently.
3. Distinguish observations, exposed responses, actions, and durable changes.
4. Explain controls in terms of reversibility, not generic risk scores.
5. State the integration mechanism when it builds trust: OneWill launches and supervises the process.
6. Prefer a concrete example over a stack of category nouns.
7. Use humor to puncture absurd defaults, never to trivialize user data or consequences.
8. Pair every absolute-sounding claim with its supervised-session scope.
9. Never describe model output as hidden reasoning or thought access.
10. Use sentence case outside small technical labels.

### Terminology

Preferred:

- Agent-World Boundary
- supervised run
- activity stream
- complete supervised-run record
- captured context
- exposed response
- proposed action
- durable effect
- policy decision
- reversible / compensable / irreversible
- interrupt / resume / hand off
- grounded summary

Avoid in public copy:

- guardrails
- safety wrapper
- cage
- babysitter
- agent police
- magic
- omniscient
- chain-of-thought capture
- passive telemetry SDK

### Status and error copy

Use the order:

`what happened → what changed → what was preserved → what can happen next`

Examples:

- “The run stopped before the network request was sent. Local changes were preserved. Review the action or resume from the previous checkpoint.”
- “This action cannot be reversed. OneWill is waiting for approval before it changes external state.”
- “The process exited unexpectedly. The activity record covers this supervised session through the last captured event.”

No hamster jokes in security, authorization, billing, data-loss, or recovery messages.

## 7. Visual system

### 7.1 Visual thesis

The interface should look like a technical instrument for understanding activity inside a controlled space.

Use:

- transparent circles and boundary arcs;
- labeled, timestamped paths, checkpoints, and branch points in product evidence views;
- small system diagrams;
- direct labels and real state;
- crisp rules and nearly square panels;
- one compact pixel hamster as a scale and identity cue.

The hamsterball is the explanatory model. It is not decoration applied to unrelated layouts.

### 7.2 Color

```css
:root {
  /* Foundations */
  --ink-950: #1c2334;
  --ink-800: #2e3442;
  --paper-050: #f3e8d6;
  --surface-000: #fff9ee;
  --surface-100: #e7d7c0;
  --muted-600: #6b6670;

  /* Boundary */
  --boundary-200: #cce6e2;
  --boundary-500: #3e91a3;
  --boundary-700: #2c6876;

  /* Agent sprite */
  --hamster-fur: #eca43a;
  --hamster-shadow: #b86424;
  --hamster-belly: #f4e1b6;
  --hamster-cheek: #e97b7a;
  --hamster-ink: #4b2015;

  /* Action and feedback */
  --action-600: #b83b32;
  --danger-700: #8e2e29;
  --success-600: #3d8062;

  /* Semantic aliases */
  --bg: var(--paper-050);
  --surface: var(--surface-000);
  --surface-muted: var(--surface-100);
  --text: var(--ink-950);
  --text-muted: var(--muted-600);
  --line: var(--ink-800);
  --boundary-soft: var(--boundary-200);
  --boundary: var(--boundary-500);
  --boundary-text: var(--boundary-700);
  --agent: var(--hamster-fur);
  --action: var(--action-600);
  --action-text: var(--surface-000);
  --inverse-bg: var(--ink-950);
  --inverse-text: var(--surface-000);
}
```

Usage:

- Console navy represents the environment and technical substrate.
- Muted teal represents capture, mediation, and the perimeter of a run.
- Natural honey-gold fur marks the agent and its current point along a path; it is not an action color.
- Cream belly and pink cheek colors belong to the sprite only, never to status or data categories.
- Console red marks deliberate action. Use the darker danger red, an icon, and explicit language for destructive, irreversible, or blocked activity.
- Success green marks committed or successfully recovered state.
- Use light boundary teal for fills and diagrams, not light text. Use `--boundary-text` for small labels on paper.
- Command strips and inverse surfaces use cream text directly on navy. Do not place cream text inside a pale teal code pill.
- Verify WCAG AA contrast for every text/background pairing before implementation.

### 7.3 Typography

```css
:root {
  --font-mono: "JetBrains Mono", "IBM Plex Mono", ui-monospace,
    SFMono-Regular, Menlo, Monaco, Consolas, monospace;
  --font-reading: "Space Grotesk", Inter, ui-sans-serif, system-ui, sans-serif;
}
```

- Use monospace for navigation, display copy, commands, controls, event labels, tables, metrics, and metadata.
- Use the grotesk for paragraphs, articles, documentation, and explanatory UI.
- Keep numerals tabular in activity timelines and metrics.
- Underline inline links; do not rely on color alone.
- Use weight and spacing before introducing more type sizes.

| Role | Size | Weight | Line height |
|---|---:|---:|---:|
| Hero | `clamp(2.25rem, 5vw, 4.75rem)` | 750–800 | 1.02 |
| Page title | `clamp(1.75rem, 3vw, 2.75rem)` | 700–800 | 1.12 |
| Section title | `1rem–1.25rem` | 650–750 | 1.3 |
| Reading body | `1rem` | 400 | 1.6 |
| Product UI | `0.875rem` | 450–600 | 1.4 |
| Event label | `0.75rem` | 500–650 | 1.35 |
| Metric | `1.25rem–1.75rem` | 650–800 | 1.15 |

### 7.4 Layout

```css
:root {
  --content-max: 84rem;
  --reading-max: 46rem;
  --gutter: clamp(1rem, 4vw, 4rem);
  --space-1: 0.25rem;
  --space-2: 0.5rem;
  --space-3: 0.75rem;
  --space-4: 1rem;
  --space-6: 1.5rem;
  --space-8: 2rem;
  --space-12: 3rem;
  --space-16: 4rem;
  --space-24: 6rem;
}
```

- Use one wide centered container.
- Use a 12-column desktop grid and single-column mobile flow.
- Default hero: five columns for copy, one-column gap, six columns for the boundary diagram.
- Use full-width rules, aligned edges, and dense evidence surfaces.
- Keep marketing narrative sparse; make activity views intentionally information-rich.
- On mobile, preserve the order: question → boundary contacts → activity record → control → action.

### 7.5 Panels and texture

```css
:root {
  --radius-control: 3px;
  --radius-panel: 0px;
  --border: 1px solid var(--line);
  --shadow-hard: 3px 3px 0 rgb(16 21 34 / 24%);
}
```

- Use square or nearly square panels for traces, diagrams, state, and controls.
- Let a panel title interrupt the top border like an instrument label.
- Use hard offset shadows sparingly.
- Allow subtle dither around diagrams and activity trails.
- Use circular geometry for the boundary, not for every card or button.
- Avoid glassmorphism, soft floating cards, neon cyberpunk styling, scanlines, and fake terminal windows.

### 7.6 Hamster system

The hamster is a genuinely cute GBA-era chibi character sprite, not a geometric icon with pixelated edges. It should look like a naturally colored golden hamster interpreted through restrained anime proportions: the head occupies roughly 55–60% of the character’s height, while a narrow short body supplies the remaining 40–45%. The head should be only modestly wider than the body. Use rounded ears, medium glossy brown eyes with one square highlight each, honey-gold fur with caramel shading, soft cream cheeks and belly, pink ears and paws, small visible feet, and a simple joyful mouth. A tiny off-center cream forehead tuft and caramel cheek freckle distinguish the character without dominating its face. Preserve those proportions and facial landmarks across every state.

Canonical assets:

- master sprite: `onewill-hamster-sprite-v4.png`.

The character is not the homepage hero. In architecture and philosophy diagrams, use the compact full-body sprite as a small system-node identifier. The boundary, perimeter-only arrows, labeled contacts, and independently captured record must carry most of the visual weight. The hamster should occupy roughly the same area as one labeled component, never the whole diagram.

Use the compact master sprite:

- inside the supervised-process node in architecture diagrams;
- in the navigation mark or favicon;
- as the current agent marker on a dense activity trail.

Use larger or animated derivatives of the same master sprite:

- moving along an activity trail;
- paused at a controlled perimeter contact;
- looking back at a branch point;
- arriving at a handoff dock;
- sleeping only in a genuinely idle or completed state;
- as a small loading or empty-state cue.

Sprite rules:

- use deliberate pixel clusters, stepped contours, and a limited shaded palette;
- keep one recognizable silhouette across every state;
- express motion with two to four purposeful frames;
- preserve the restrained 55–60% head / 40–45% body ratio; never exaggerate it into a giant floating head;
- keep the eye highlights, cream cheeks, pink paws, forehead tuft, and cheek freckle readable;
- make the neutral expression joyful, alert, and friendly;
- let posture communicate run state before facial expression;
- in product activity views, preserve the labeled activity trail when the sprite moves;
- use the full sprite at 32 px or larger; below that size, crop the same master asset rather than drawing a second character.
- use `image-rendering: pixelated` and nearest-neighbor resizing; never soften the logical pixel grid.

Do not use:

- soft 3D rendering;
- generic emoji faces, sparse geometric hamsters, or flat single-fill bodies;
- plush-toy proportions;
- cage bars, bedding, food bowls, or pet-store scenes;
- uncontrolled bouncing that suggests the boundary lacks control;
- speech bubbles that make the mascot the product narrator;
- expressions that trivialize destructive or irreversible actions.
- copied third-party sprite silhouettes, facial geometry, markings, palettes, or pixel layouts. References may inform generic handheld-era readability, never character identity.

The ball is always transparent enough to show the agent and boundary contacts. The boundary must read as enabling movement, not imprisonment.

Make the shell recognizable as a hamster ball through sparse construction cues rather than mascot scenery. Use a transparent double shell, a shallow access hatch where the launch connector meets the top perimeter, four short diagonal seams confined to the shell ring, and two restrained reflection arcs near the upper perimeter. Construct the reflection arcs as exact left/right mirrors on the same shell radius; do not hand-shape them independently. These marks describe a manufactured spherical enclosure; they are not activity data. Never extend seams across the interior, add ventilation dots, or introduce an equatorial line that could be mistaken for a trajectory.

The boundary itself is the control plane. Do not draw a detached gate outside the ball. Use **OBSERVE WORLD** and **CHANGE WORLD** as the canonical outer operation headings in philosophy diagrams. Label the two perimeter contacts **INPUT** and **EFFECTS**. Mount both labels on matching neutral shell plates immediately above their contact circles. The plates clarify that these are named boundary ports; the contact circles and wires—not the plate fills—carry the observation and effect color semantics. These nouns name exactly what crosses the boundary; observation and control are already expressed by the outer operation headings and arrow directions.

Treat dark boxes as concrete change targets, not as generic label containers. On the observation side, use the unboxed compact surface line `CLI · GUI`: these are interaction modes through which input is exposed. On the change side, retain dark boxes for file, API, and interface targets because they represent external destinations that may receive durable effects. The asymmetry is functional: modes remain labels; mutation destinations become blocks.

Philosophy diagrams do not show an internal trajectory. Do not draw ribbons, anonymous event dots, orbit lines, checkpoints, or arrows that imply heterogeneous agent activity is a physical route through the ball.

Keep the philosophy-diagram interior visually quiet. Do not add decorative motion marks around the hamster head; motion belongs in product views where it corresponds to a labeled state or event.

Label the independently captured store **JOURNAL** in philosophy diagrams. This is the concise public diagram label for the activity record described in prose; WAL remains the deeper database-recovery mechanism. Use `CLI · GUI` beneath **OBSERVE WORLD** as the canonical compact surface list.

Reserve causal paths and checkpoints for product activity views where every event has a real stage, timestamp, and event detail.

## 8. Product component language

### Supervised-launch diagram

Show both launch paths converging on the same OneWill-created process. Label process ownership explicitly. Continue the diagram through daemon, mount, mediation boundary, and activity APIs.

### Complete supervised-run activity trail

Render the run as a causal path, not a flat log stream. Each event shows:

- stage: Observe, Respond, Act, Change, Control, or Outcome;
- timestamp and duration;
- parent or preceding event;
- relevant captured resource;
- policy or operator decision when present;
- link to before/after state when available.

### Agent session replay

Synchronize exposed interface state, process activity, and the causal event trail. Users should be able to jump from an outcome to the action and captured observation that preceded it.

Never label replay as a recording of hidden reasoning.

### Paths and funnels

Use path and funnel views to answer product questions about agent behavior:

- which recommendation appeared;
- which tool or result the agent chose;
- where a workflow stalled;
- which sequence led to success;
- how paths differ by captured run attributes.

Always allow a user to open the underlying runs behind an aggregate.

### Guaranteed run summary

The summary panel includes:

- task and outcome;
- significant observations;
- actions and durable changes;
- blocks, approvals, and interventions;
- unresolved work;
- citations into the captured activity stream.

### Action control

Show:

- the proposed action;
- target and scope;
- reversibility class;
- captured before-state or compensation plan;
- policy reason;
- exact consequence of approval;
- approve, deny, or inspect options.

Do not present harmless reads and irreversible mutations in the same undifferentiated approval style.

In product UI, an approval step may still be called a gate. In architecture and brand diagrams, render that decision as the **Control** contact on the Agent-World Boundary rather than as a separate physical object.

### Before/after state

Show the smallest meaningful state diff. Label whether the change is proposed, applied, committed, reversed, or compensated.

### Rollback and compensation panel

Separate literal reversal from compensating action. Explain what history remains after compensation.

### Integration diagram

Show direct CLI and provider protocol as two initiators of the same `LaunchSession`. Never imply two different runtimes or a provider-owned agent process.

## 9. Motion

Motion represents a run changing state.

- Current-position movement along a trail: 180–300 ms.
- New activity event: 120–180 ms.
- Boundary-control decision: 160–220 ms.
- Branch or rewind: 220–360 ms with the causal relationship kept visible.
- Button press: 80–120 ms.
- Panel transition: opacity plus 4 px movement maximum.
- No parallax or continuous ambient bouncing.
- The hamster never outruns the event data.
- Respect `prefers-reduced-motion`; replace travel with immediate state changes and persistent path markers.

## 10. Homepage blueprint

### 1. Navigation

OneWill wordmark, Product, How it works, Blog, Docs, and **Try the demo**.

### 2. Hero

Use the locked message hierarchy with the system-philosophy diagram as the first image. This is an architecture explanation, not a mascot illustration.

The diagram must show, in one scan:

1. a single `$ onewill exec -- <process>` node connected to the top of the ball, with `CREATES A BOUNDARY` placed to the right of the connector line;
2. an observation flow from `OBSERVE WORLD`, with the unboxed surface line `CLI · GUI`, terminating at the left contact labeled `INPUT` without connecting to the agent;
3. a small full-body hamster sprite identifying the unmodified agent in an otherwise quiet, open interior with no decorative motion marks;
4. a straight connection from the boundary to `JOURNAL`, making boundary-owned capture independent of agent self-reporting;
5. a proposed-change flow beginning at the right contact labeled `EFFECTS` and pointing toward the dark file, API, and interface targets under `CHANGE WORLD` before effects become durable, without connecting to the agent;
6. replay, analytics, and grounded summaries derived from the record;
7. undo or compensation returning from the record toward the controlled effect path.

The hamster sprite should be memorable on a second look. The boundary and causal system should be understandable on the first.

Do not show `LaunchSession` in the philosophy hero. Reserve the provider launch path and CLI/API convergence for the later launch-proof or integration section, where implementation detail is the point.

Below 520 px, use a dedicated simplified composition with stacked two-line `OBSERVE / WORLD` and `CHANGE / WORLD` nodes. Preserve the same perimeter-only flow semantics and align the `INPUT` and `EFFECTS` labels above their respective contact circles; do not shrink the desktop diagram into illegibility.

### 3. Launch proof

Show:

```bash
onewill exec -- codex
```

Pair it with the provider `LaunchSession` path. The point is one boundary for an individual command or a platform integration.

### 4. Captured activity

Demonstrate the Observe → Respond → Act → Change → Control → Outcome model using one realistic run. Let visitors inspect the path instead of reading a feature list.

### 5. Behavior analytics

Show two concrete questions:

- “What did the agent recommend for this query?”
- “Where did agents get stuck in signup?”

Pair aggregate paths or funnels with the ability to open the underlying run.

### 6. Guaranteed summary

Contrast an agent-authored recollection with a OneWill summary grounded in the captured activity record. Keep the contrast factual rather than adversarial.

### 7. Control and recovery

Explain reversible, compensable, and irreversible actions. Demonstrate a before-state capture, a boundary-control decision, and a rollback or compensation path.

### 8. Integration modes

Show direct user launch and provider launch converging on the same OneWill-owned process lifecycle.

### 9. Manifesto and credibility

Explain why database recovery ideas belong in agent execution. Present the founders’ database-systems background as evidence for the mechanism, not as a separate prestige section.

### 10. Demo CTA

Headline: **Put an agent inside the boundary.**  
Primary CTA: **Try the demo**  
Secondary CTA: **Read the manifesto →**

## 11. Accessibility and trust

- Meet WCAG AA contrast at minimum.
- Do not rely on color alone for event stages or policy decisions.
- Give every diagram a concise text equivalent.
- Make trails and event relationships navigable by keyboard.
- Provide visible focus states for every control.
- Do not announce every streaming event to assistive technology; offer a summarized live region and manual detail view.
- Keep irreversible-action language literal and specific.
- Give every generated summary links to its source activity.
- Distinguish captured fact, product inference, and generated explanation in the UI.
- Distinguish observed behavior from intended behavior.
- State which capture surfaces and integrations are supported in documentation.

## 12. Internal positioning only

These analogies help explain the opportunity internally. They are not public category language.

- **OpenTelemetry for agents:** useful for thinking about correlated signals, instrumentation, and context propagation; incomplete because OneWill also owns process supervision and in-path control.
- **eBPF for agents:** useful for thinking about observation below application cooperation and programmable enforcement; too implementation-specific and expectation-heavy for public positioning.
- **PostHog for agents:** useful for thinking about behavioral paths, funnels, replay, recommendations, and friction; incomplete because OneWill also mediates agent effects and recovery.

Publicly, say **Agent-World Boundary** and define it in plain language.

## 13. Brand QA checklist

- [ ] OneWill is the only public brand or product name.
- [ ] The category is Agent-World Boundary.
- [ ] The hero begins with “Know what your agents are doing.”
- [ ] The boundary is described as enabling movement, not imprisoning the agent.
- [ ] The product is shown creating and supervising the agent process.
- [ ] Direct CLI and provider launches converge on the same `LaunchSession` path.
- [ ] Activity is described using Observe, Respond, Act, Change, Control, and Outcome.
- [ ] No copy claims access to hidden reasoning or chain of thought.
- [ ] “Complete” is scoped to a OneWill-supervised session and supported capture surfaces.
- [ ] “Guaranteed summary” refers to grounding in the independent activity record.
- [ ] Rollback claims are limited to reversible actions with sufficient recorded state.
- [ ] Compensable and irreversible actions are described accurately.
- [ ] Public messaging does not call OneWill eBPF, OpenTelemetry, or PostHog for agents.
- [ ] The hamster remains a restrained technical character.
- [ ] Philosophy diagrams keep the ball interior open and route meaningful flows only to or from labeled perimeter contacts.
- [ ] Philosophy diagrams use no decorative hamster motion marks.
- [ ] No serious error or approval state contains mascot humor.
- [ ] Claims do not invent benchmarks, customers, pricing, or compatibility.
- [ ] Exact support status is deferred to documentation.
- [ ] Every diagram has a text equivalent.
- [ ] Reduced-motion mode preserves all state information.

## 14. One-paragraph creative brief

Design OneWill as the Agent-World Boundary: a calm, transparent technical system around consequential agent runs. Lead with the operator’s need to know what agents are doing, then show how OneWill creates and supervises the process, independently captures its activity, turns that record into analytics and grounded summaries, and mediates effects before they reach the world. In philosophy diagrams, keep the ball interior open and quiet: `OBSERVE WORLD` passes `CLI · GUI` input through the `INPUT` contact, proposed changes cross the `EFFECTS` contact toward dark change-target blocks under `CHANGE WORLD`, and `JOURNAL` connects straight to the boundary. Use the 8-Bit Utility palette: console navy and warm cream for the substrate, muted teal for the transparent shell, natural honey-gold and cream for the agent sprite, and restrained console red for deliberate action. Pair crisp monospace UI with readable grotesk prose. The hamster should be genuinely cute but graphically disciplined: a restrained chibi GBA-era golden hamster with a moderately enlarged expressive head, medium brown eyes, a narrow short body, pink paws, and a tiny off-center cream forehead tuft. The result should feel like serious systems infrastructure with a memorable handheld-era character, giving agents room to run and operators a boundary they can inspect and control.

---

### Source note

This guide synthesizes OneWill’s public thesis and product direction from [Stealing 50 Years of Database Ideas for AI Agents](https://onewill.ai/blog/2026/stealing-50-years-of-database-ideas-for-ai-agents/) and the [OneWill public site](https://onewill.ai/), together with the canonical integration model supplied by the OneWill team.
