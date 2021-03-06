/*
 * Copyright (c) 2019 Open990.org, Inc. All rights reserved.
 */

import React, { Fragment } from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

import MaxContainer from 'hoc/MaxContainer';
import classNames from 'classnames';

import { info, foundationsAndGrants } from 'App/routes';
import DatasetPageHelmet from '../DatasetPageHelmet';
import DatasetWrapper from '../DatasetWrapper';
import { pageStyles, orderedList } from './pageStyles';

const styles = theme => ({
  ...pageStyles(theme),
  ...orderedList
});

export const FoundationsAndGrants = ({ classes }) => {
  const downloadRef = 'Open990_SnackSet_Foundations_Grants.zip';
  return (
    <Fragment>
      <DatasetPageHelmet
        title="Foundations and grants dataset | Open990"
        description="Streamline your grant search with Open990's free Foundations & Grants dataset. Contains historical grants, contact info, and application guidelines."
        path={foundationsAndGrants}
      />
      <DatasetWrapper>
        {onDatasetDownload => (
          <div className={classNames('DatasetPage', classes.root)}>
            <MaxContainer classes={{ container: classes.container }}>
              <Grid container justify="center">
                <Grid item xs={12} md={10} className={classes.policyHeader}>
                  <h1>The dataset you need to get the grants you want.</h1>
                </Grid>
                <Grid item xs={12}>
                  <p className={classes.textContent}>
                    Streamline your nonprofit grant search with Open990’s free*
                    Foundations & Grants dataset.
                  </p>
                </Grid>
                <Grid container justify="center">
                  <ol className={classes.contentList}>
                    <li>
                      identify foundations whose charitable activities are
                      aligned with your organization’s mission
                    </li>
                    <li>
                      browse grants recently awarded by those foundations
                      (recipients, descriptions, amounts)
                    </li>
                    <li>
                      find application submission information (deadlines,
                      contact info)
                    </li>
                  </ol>
                </Grid>
                <Grid item xs={12} className={classes.headingContent}>
                  <p className={classes.textContent}>
                    <strong>
                      Sort, filter, and analyze funding prospects by geography,
                      grant maximums, grant counts, total disbursements, cause
                      area, and more!
                    </strong>
                  </p>
                  <p
                    className={classes.textContent}
                    style={{ color: '#6839d3' }}
                  >
                    Designed with fundraisers in mind, this dataset comprises
                    123,000 U.S. private foundations, including contact
                    information and assets. It features 913,00 grants awarded by
                    foundations that electronically filed a tax return for TY
                    2017 or 2018.
                  </p>
                  <small>
                    <a rel="license" href="http://creativecommons.org/licenses/by-nc/4.0/"><img alt="Creative Commons License" src="https://i.creativecommons.org/l/by-nc/4.0/88x31.png" /></a><br/>
                    *Free for non-commercial use only, such as grant-seeking,
                    research, and journalism. Contact{' '}
                    <a href={info} className={classes.accentElement}>
                      info@open990.org
                    </a>{' '}
                    if you have questions about your use case.
                  </small>
                  <Button
                    id="landingpage-download-foundation-button"
                    className={classes.button}
                    onClick={e => onDatasetDownload(e, downloadRef)}
                  >
                    Download now!
                  </Button>
                  <p className={classes.textContent}>
                    <span
                      id="landingpage-download-foundation-link"
                      className={classes.accentElement}
                      onClick={e => onDatasetDownload(e, downloadRef)}
                    >
                      Download
                    </span>{' '}
                    contains the dataset (2 csv files), license, and
                    documentation.
                  </p>
                  <small style={{ fontStyle: 'italic' }}>
                    Open990.org is a 501(c)3 organization committed to
                    facilitating research and promoting transparency in the
                    nonprofit sector.
                  </small>
                </Grid>
              </Grid>
            </MaxContainer>
          </div>
        )}
      </DatasetWrapper>
    </Fragment>
  );
};

export default withStyles(styles)(FoundationsAndGrants);