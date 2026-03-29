import {
  calculatorWaitlistCtaDescription,
  calculatorWaitlistCtaTitle,
  smileupSiteUrl,
  smileupWaitlistUrl,
} from "../../content/calculatorWaitlistCta";
import { Document, Link, Page, StyleSheet, Text, View } from "@react-pdf/renderer";

const palette = {
  primary: "#2a9a32",
  primaryDark: "#1e6b24",
  ink: "#0f172a",
  text: "#1e293b",
  muted: "#64748b",
  line: "#e2e8f0",
  ctaBg: "#ecfdf5",
  white: "#ffffff",
};

const styles = StyleSheet.create({
  page: {
    paddingTop: 48,
    paddingBottom: 56,
    paddingHorizontal: 44,
    fontFamily: "Helvetica",
    fontSize: 10,
    color: palette.text,
    lineHeight: 1.45,
  },
  accentBar: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    height: 6,
    backgroundColor: palette.primary,
  },
  brandRow: {
    flexDirection: "row",
    alignItems: "flex-end",
    marginBottom: 6,
  },
  brandName: {
    fontSize: 22,
    fontFamily: "Helvetica-Bold",
    color: palette.primaryDark,
    letterSpacing: -0.5,
  },
  brandTag: {
    fontSize: 9,
    color: palette.muted,
    marginBottom: 2,
    marginLeft: 10,
  },
  docTitle: {
    fontSize: 16,
    fontFamily: "Helvetica-Bold",
    color: palette.ink,
    marginTop: 4,
    marginBottom: 4,
  },
  meta: {
    fontSize: 9,
    color: palette.muted,
    marginBottom: 18,
  },
  sectionTitle: {
    fontSize: 11,
    fontFamily: "Helvetica-Bold",
    color: palette.ink,
    marginBottom: 8,
    marginTop: 4,
  },
  inputRow: {
    flexDirection: "row",
    borderBottomWidth: 1,
    borderBottomColor: palette.line,
    paddingVertical: 6,
  },
  inputLabel: {
    width: "42%",
    fontSize: 9,
    color: palette.muted,
  },
  inputVal: {
    flex: 1,
    fontSize: 9,
    fontFamily: "Helvetica-Bold",
    color: palette.text,
  },
  totalBox: {
    marginTop: 20,
    padding: 16,
    backgroundColor: palette.ink,
    borderRadius: 10,
  },
  totalLabel: {
    fontSize: 9,
    color: "#94a3b8",
    marginBottom: 4,
  },
  totalNumber: {
    fontSize: 36,
    fontFamily: "Helvetica-Bold",
    color: "#86efac",
    lineHeight: 1.1,
  },
  totalUnit: {
    fontSize: 10,
    color: "#cbd5e1",
    marginTop: 4,
  },
  barRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
  },
  barLabel: {
    width: 58,
    fontSize: 8,
    color: "#e2e8f0",
    marginRight: 8,
  },
  barTrack: {
    flex: 1,
    height: 7,
    backgroundColor: "rgba(255,255,255,0.15)",
    borderRadius: 4,
    overflow: "hidden",
    marginRight: 8,
  },
  barFill: {
    height: "100%",
    borderRadius: 4,
  },
  barVal: {
    width: 52,
    fontSize: 8,
    color: "#a7f3d0",
    textAlign: "right",
    fontFamily: "Helvetica-Bold",
  },
  disclaimer: {
    fontSize: 9,
    color: palette.muted,
    marginBottom: 14,
    lineHeight: 1.5,
  },
  lineBlock: {
    marginBottom: 11,
    paddingBottom: 9,
    borderBottomWidth: 1,
    borderBottomColor: palette.line,
  },
  lineHead: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 4,
  },
  lineTitle: {
    fontSize: 10,
    fontFamily: "Helvetica-Bold",
    flex: 1,
    paddingRight: 8,
  },
  lineTons: {
    fontSize: 10,
    fontFamily: "Helvetica-Bold",
    color: palette.primaryDark,
  },
  formula: {
    fontSize: 8,
    color: palette.muted,
    marginBottom: 4,
  },
  extra: {
    fontSize: 7,
    color: palette.muted,
    marginBottom: 4,
  },
  pillRow: {
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
  },
  pill: {
    fontSize: 7,
    paddingHorizontal: 6,
    paddingVertical: 3,
    borderRadius: 4,
    fontFamily: "Helvetica-Bold",
    marginRight: 6,
  },
  pillOfficial: {
    backgroundColor: "#d1fae5",
    color: "#065f46",
  },
  pillAssumed: {
    backgroundColor: "#fef3c7",
    color: "#92400e",
  },
  sourceName: {
    fontSize: 8,
    color: palette.text,
    marginRight: 6,
  },
  refItem: {
    marginBottom: 6,
    fontSize: 9,
  },
  refName: {
    fontFamily: "Helvetica-Bold",
  },
  refDetail: {
    fontSize: 8,
    color: palette.muted,
    marginTop: 2,
  },
  ctaBox: {
    marginTop: 20,
    padding: 16,
    backgroundColor: palette.ctaBg,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#a7f3d0",
  },
  ctaTitle: {
    fontSize: 12,
    fontFamily: "Helvetica-Bold",
    color: palette.ink,
    marginBottom: 8,
  },
  ctaBody: {
    fontSize: 9,
    color: palette.text,
    marginBottom: 14,
    lineHeight: 1.5,
  },
  waitlistLink: {
    alignSelf: "flex-start",
    backgroundColor: palette.primary,
    borderRadius: 8,
    textDecoration: "none",
  },
  waitlistLinkText: {
    color: palette.white,
    fontSize: 10,
    fontFamily: "Helvetica-Bold",
    paddingVertical: 10,
    paddingHorizontal: 18,
  },
  footerNote: {
    marginTop: 14,
    fontSize: 8,
    color: palette.muted,
  },
  pageNumber: {
    position: "absolute",
    bottom: 28,
    left: 44,
    right: 44,
    fontSize: 8,
    color: palette.muted,
    textAlign: "center",
  },
});

const LINES_PER_PAGE = 4;

function chunkLines(arr, size) {
  const out = [];
  for (let i = 0; i < arr.length; i += size) {
    out.push(arr.slice(i, i + size));
  }
  return out;
}

function LineBlock({ line }) {
  return (
    <View style={styles.lineBlock} wrap={false}>
      <View style={styles.lineHead}>
        <Text style={styles.lineTitle}>{line.title}</Text>
        <Text style={styles.lineTons}>{line.tons.toFixed(3)} t</Text>
      </View>
      <Text style={styles.formula}>{line.formula}</Text>
      {line.extra ? <Text style={styles.extra}>{line.extra}</Text> : null}
      <View style={styles.pillRow}>
        <Text
          style={[
            styles.pill,
            line.sourceType === "official" ? styles.pillOfficial : styles.pillAssumed,
          ]}
        >
          {line.sourceType === "official" ? "Published data" : "Rough guide"}
        </Text>
        <Text style={styles.sourceName}>{line.sourceName}</Text>
        {line.sourceUrl ? (
          <Link src={line.sourceUrl} style={{ fontSize: 8, color: "#2563eb" }}>
            Open source
          </Link>
        ) : null}
      </View>
    </View>
  );
}

export default function FootprintReportDocument({
  generatedLabel,
  totalTons,
  categories,
  disclaimer,
  lines,
  references,
  inputs,
}) {
  const lineChunks = chunkLines(lines, LINES_PER_PAGE);

  return (
    <Document
      title="SmileUp footprint estimate"
      author="SmileUp"
      subject="Carbon footprint estimate"
      keywords="carbon footprint, CO2, SmileUp"
    >
      <Page size="A4" style={styles.page}>
        <View style={styles.accentBar} fixed />
        <View style={styles.brandRow}>
          <Text style={styles.brandName}>SmileUp</Text>
          <Text style={styles.brandTag}>smileup.world</Text>
        </View>
        <Text style={styles.docTitle}>Your carbon footprint estimate</Text>
        <Text style={styles.meta}>Generated {generatedLabel} · Educational estimate, not a certified audit</Text>

        <Text style={styles.sectionTitle}>Your inputs</Text>
        {inputs.map(([label, val]) => (
          <View key={label} style={styles.inputRow} wrap={false}>
            <Text style={styles.inputLabel}>{label}</Text>
            <Text style={styles.inputVal}>{val}</Text>
          </View>
        ))}

        <View style={styles.totalBox}>
          <Text style={styles.totalLabel}>Estimated annual total</Text>
          <Text style={styles.totalNumber}>{totalTons.toFixed(2)}</Text>
          <Text style={styles.totalUnit}>tonnes CO2e (carbon dioxide equivalent)</Text>
          {categories.map((c) => (
            <View key={c.label} style={styles.barRow} wrap={false}>
              <Text style={styles.barLabel}>{c.label}</Text>
              <View style={styles.barTrack}>
                <View style={[styles.barFill, { width: `${c.pct}%`, backgroundColor: c.color }]} />
              </View>
              <Text style={styles.barVal}>{c.tons.toFixed(2)} t</Text>
            </View>
          ))}
        </View>

        <Text
          style={styles.pageNumber}
          render={({ pageNumber, totalPages }) => `Page ${pageNumber} of ${totalPages}`}
          fixed
        />
      </Page>

      {lineChunks.map((chunk, chunkIndex) => (
        <Page key={`lines-${chunkIndex}`} size="A4" style={styles.page}>
          <View style={styles.accentBar} fixed />
          {chunkIndex === 0 ? (
            <>
              <Text style={styles.docTitle}>How we got this number</Text>
              <Text style={styles.disclaimer}>{disclaimer}</Text>
            </>
          ) : (
            <Text style={styles.docTitle}>How we got this number (continued)</Text>
          )}
          {chunk.map((line) => (
            <LineBlock key={line.id} line={line} />
          ))}
          <Text
            style={styles.pageNumber}
            render={({ pageNumber, totalPages }) => `Page ${pageNumber} of ${totalPages}`}
            fixed
          />
        </Page>
      ))}

      <Page size="A4" style={styles.page}>
        <View style={styles.accentBar} fixed />
        <Text style={styles.sectionTitle}>References behind this estimate</Text>
        {references.map((r) => (
          <View key={r.id} style={styles.refItem}>
            <Text style={styles.refName}>• {r.name}</Text>
            {r.detail ? <Text style={styles.refDetail}>{r.detail}</Text> : null}
          </View>
        ))}

        <View style={styles.ctaBox}>
          <Text style={styles.ctaTitle}>{calculatorWaitlistCtaTitle}</Text>
          <Text style={styles.ctaBody}>{calculatorWaitlistCtaDescription}</Text>
          <Link src={smileupWaitlistUrl} style={styles.waitlistLink}>
            <Text style={styles.waitlistLinkText}>Join the waitlist</Text>
          </Link>
          <Text style={styles.footerNote}>smileup.world · {smileupSiteUrl}</Text>
        </View>

        <Text
          style={styles.pageNumber}
          render={({ pageNumber, totalPages }) => `Page ${pageNumber} of ${totalPages}`}
          fixed
        />
      </Page>
    </Document>
  );
}
