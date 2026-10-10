type UpgradeLinkProps = {
  compact?: boolean;
};

export function UpgradeLink({ compact = false }: UpgradeLinkProps) {
  return (
    <a
      className={`account-signin${compact ? " account-signin-compact" : ""}`}
      href="https://github.com/hieulp104/Fe"
      target="_blank"
      rel="noreferrer"
    >
      <span>Source</span>
    </a>
  );
}
