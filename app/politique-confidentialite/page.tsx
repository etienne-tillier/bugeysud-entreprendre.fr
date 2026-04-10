import type { Metadata } from "next";
import { SITE_URL } from "@/config/site";

export const metadata: Metadata = {
  title: "Politique de confidentialité — BugeySud Entreprendre",
  description: "Politique de confidentialité et traitement des données personnelles du site bugeysud-entreprendre.fr.",
  alternates: { canonical: `${SITE_URL}/politique-confidentialite` },
  robots: { index: false, follow: false },
};

export default function PolitiqueConfidentialitePage() {
  return (
    <>
      <div className="page-header">
        <div className="container">
          <h1>Politique de confidentialité</h1>
        </div>
      </div>

      <div className="section">
        <div className="container-narrow">
          <div className="content-page">

            <p>
              Dernière mise à jour : janvier 2025. Cette politique de confidentialité
              décrit comment le site <strong>bugeysud-entreprendre.fr</strong> collecte,
              utilise et protège vos données personnelles conformément au Règlement Général
              sur la Protection des Données (RGPD — Règlement UE 2016/679).
            </p>

            <h2>1. Responsable du traitement</h2>
            <p>
              Le responsable du traitement des données est BugeySud Entreprendre,
              joignable à l&apos;adresse suivante :{" "}
              <a href="mailto:contact@bugeysud-entreprendre.fr" style={{ color: "var(--primary)", fontWeight: 600 }}>
                contact@bugeysud-entreprendre.fr
              </a>
            </p>

            <h2>2. Données collectées</h2>
            <p>Dans le cadre de la navigation sur ce site, nous collectons :</p>
            <ul>
              <li>
                <strong>Données de navigation automatiques :</strong> adresse IP (anonymisée),
                type de navigateur, pages visitées, durée des sessions — via des outils
                d&apos;analyse d&apos;audience anonymisés.
              </li>
              <li>
                <strong>Données de contact volontaires :</strong> lorsque vous nous envoyez
                un email (nom/prénom, adresse email, contenu du message).
              </li>
            </ul>
            <p>
              Nous ne collectons pas de données sensibles (santé, opinions politiques,
              croyances religieuses, données biométriques).
            </p>

            <h2>3. Finalités du traitement</h2>
            <ul>
              <li>Amélioration du site et de ses contenus (statistiques anonymes)</li>
              <li>Réponse à vos demandes de contact et accompagnement</li>
              <li>Prévention des abus et sécurisation du site</li>
            </ul>

            <h2>4. Base légale</h2>
            <ul>
              <li><strong>Intérêt légitime</strong> pour les statistiques anonymes de navigation</li>
              <li><strong>Consentement</strong> pour les cookies non essentiels (si applicable)</li>
              <li><strong>Execution d&apos;un contrat</strong> pour le traitement des demandes de contact</li>
            </ul>

            <h2>5. Durée de conservation</h2>
            <ul>
              <li>Données de contact : 3 ans maximum après la dernière interaction</li>
              <li>Données de navigation anonymisées : 13 mois glissants</li>
              <li>Logs techniques : 12 mois</li>
            </ul>

            <h2>6. Destinataires des données</h2>
            <p>
              Vos données ne sont jamais vendues à des tiers. Elles peuvent être
              transmises à nos prestataires techniques (hébergement Vercel, outils
              d&apos;analyse) dans le strict respect du RGPD et sous contrat de sous-traitance.
            </p>

            <h2>7. Cookies</h2>
            <p>
              Ce site utilise uniquement des cookies techniques strictement nécessaires
              au fonctionnement (aucun cookie publicitaire ou de profilage). Si des
              outils d&apos;analyse sont activés, ils fonctionnent en mode anonymisé sans
              dépôt de cookie de traçage.
            </p>

            <h2>8. Vos droits</h2>
            <p>Conformément au RGPD, vous disposez des droits suivants :</p>
            <ul>
              <li><strong>Accès</strong> : obtenir une copie de vos données</li>
              <li><strong>Rectification</strong> : corriger des données inexactes</li>
              <li><strong>Effacement</strong> : demander la suppression de vos données</li>
              <li><strong>Opposition</strong> : vous opposer à certains traitements</li>
              <li><strong>Portabilité</strong> : récupérer vos données dans un format structuré</li>
              <li><strong>Limitation</strong> : restreindre temporairement le traitement</li>
            </ul>
            <p>
              Pour exercer ces droits, contactez notre DPO à :{" "}
              <a href="mailto:contact@bugeysud-entreprendre.fr" style={{ color: "var(--primary)", fontWeight: 600 }}>
                contact@bugeysud-entreprendre.fr
              </a>
            </p>
            <p>
              Vous disposez également du droit d&apos;introduire une réclamation auprès de la
              CNIL (Commission Nationale de l&apos;Informatique et des Libertés) :{" "}
              <span>cnil.fr</span>
            </p>

            <h2>9. Hébergeur et transferts hors UE</h2>
            <p>
              Le site est hébergé par Vercel Inc. (États-Unis). Les transferts de données
              hors UE sont encadrés par les clauses contractuelles types de la Commission
              européenne (CCT). Vercel est certifié conforme aux standards de sécurité
              applicables.
            </p>

            <h2>10. Modifications de cette politique</h2>
            <p>
              Cette politique peut être mise à jour à tout moment. La date de dernière
              mise à jour figure en haut de ce document. En cas de modification
              substantielle, une information sera publiée sur le site.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
