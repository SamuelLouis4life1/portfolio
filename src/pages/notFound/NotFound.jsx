import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { Container, Card } from "react-bootstrap";
// import useDocumentTitle from "../components/useDocumentTitle";

import './not-found.css';

export default function NotFound (props)
{
    const { t } = useTranslation('not-found-page');

    // useDocumentTitle(t('title'))

    return(
        <div className="bg-container">
            <Container>
                <Card>
                    <Card.Body>
                        <Card.Title>{t('title')}</Card.Title>
                        <Card.Text>{t('pageNotFound')}</Card.Text>
                        <Link to="/" className="btn btn-secondary">{t('goBack')}</Link>
                    </Card.Body>
                </Card>
            </Container>
        </div>
    )
}