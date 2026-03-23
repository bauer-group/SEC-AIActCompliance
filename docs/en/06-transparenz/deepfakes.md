# Deepfakes & Synthetic Content

## Requirement

Providers of AI systems that generate synthetic audio, image, video or text content must ensure that the outputs are marked as AI-generated in a **machine-readable format** (Art. 50(2)).

Deployers who publish deepfakes must **clearly and visually disclose** this (Art. 50(4)).

## BAUER GROUP Relevance

The BAUER GROUP does not produce or distribute **any deepfakes**. However, the following scenarios must be considered:

| Scenario | Obligation |
|---|---|
| AI-generated marketing texts | Labelling upon publication recommended |
| AI-generated images for presentations | Internal: no obligation. Externally published: machine-readable labelling |
| AI-generated code | No labelling obligation (not "content" within the meaning of Art. 50) |
| AI-assisted translations | Recommendation: note "machine translated" |

## Technical Implementation

The following standards are suitable for machine-readable labelling of synthetic content:

- **C2PA standard** (Coalition for Content Provenance and Authenticity) for images/video
- **IPTC metadata** for images
- **Custom HTTP headers** or meta tags for web content

The specific technical implementation will be defined as needed when BAUER products generate synthetic content for external publication.
