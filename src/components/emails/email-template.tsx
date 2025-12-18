import {
  Body,
  Button,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Section,
  Text,
} from '@react-email/components';

interface EmailTemplateProps {
  action: string;
  heading: string;
  siteName: string;
  baseUrl: string;
  url: string;
  content: string;
}

const EmailTemplate = ({
  action,
  heading,
  siteName,
  baseUrl,
  url,
  content,
}: EmailTemplateProps) => {
  return (
    <Html>
      <Head />
      <Body style={styles.body}>
        <Container style={styles.container}>
          {/* Brand */}
          <Text style={styles.brand}>{siteName}</Text>

          <Heading style={styles.heading}>{heading}</Heading>

          <Text style={styles.text}>
            {content.split('\n').map((line, i) => (
              <span key={i}>
                {line}
                <br />
              </span>
            ))}
          </Text>

          {/* CTA */}
          <Section style={styles.cta}>
            <Button href={url} style={styles.button}>
              {action}
            </Button>
          </Section>

          <Text style={styles.muted}>
            If the button doesn’t work, copy and paste this link:
          </Text>

          <Text style={styles.link}>{url}</Text>

          <Hr style={styles.hr} />

          {/* Footer */}
          <Text style={styles.footer}>
            © {new Date().getFullYear()} {siteName}
          </Text>

          <Text style={styles.footer}>
            <a href={baseUrl} style={styles.footerLink}>
              {baseUrl}
            </a>
          </Text>
        </Container>
      </Body>
    </Html>
  );
};

const styles = {
  body: {
    backgroundColor: '#f6f6f4', // background
    fontFamily:
      '-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica, Arial, sans-serif',
    padding: '24px',
  },

  container: {
    backgroundColor: '#ffffff', // card
    borderRadius: '10px', // radius-lg
    padding: '32px',
    maxWidth: '520px',
    margin: '0 auto',
    border: '1px solid #e6e4e1', // border
  },

  brand: {
    fontSize: '14px',
    fontWeight: 600,
    letterSpacing: '0.04em',
    textTransform: 'uppercase' as const,
    color: '#a16207', // primary
    marginBottom: '16px',
  },

  heading: {
    fontSize: '22px',
    fontWeight: 600,
    color: '#26231f', // foreground
    marginBottom: '12px',
  },

  text: {
    fontSize: '14px',
    lineHeight: '22px',
    color: '#3f3a34',
  },

  cta: {
    margin: '28px 0',
    textAlign: 'center' as const,
  },

  button: {
    backgroundColor: '#f59e0b', // primary
    color: '#1c1400', // primary-foreground
    padding: '12px 22px',
    borderRadius: '10px',
    fontSize: '14px',
    fontWeight: 600,
    textDecoration: 'none',
    display: 'inline-block',
  },

  muted: {
    fontSize: '12px',
    color: '#8a847c', // muted-foreground
    marginBottom: '6px',
  },

  link: {
    fontSize: '12px',
    color: '#d97706',
    wordBreak: 'break-all' as const,
  },

  hr: {
    margin: '28px 0',
    borderColor: '#e6e4e1',
  },

  footer: {
    fontSize: '12px',
    color: '#8a847c',
    textAlign: 'center' as const,
  },

  footerLink: {
    color: '#8a847c',
    textDecoration: 'none',
  },
};

export default EmailTemplate;
