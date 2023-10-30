import React from 'react';
import cx from 'clsx';
import Link from 'next/link';
import { AppShell, Container, RemoveScroll, Group } from '@mantine/core';
import { ColorSchemeControl, HeaderControls, MantineLogo, meta } from '@mantine/ds';
import classes from './Shell.module.css';

interface ShellProps {
  children: React.ReactNode;
}

export function Shell({ children }: ShellProps) {
  return (
    <AppShell header={{ height: 60 }}>
      <AppShell.Header className={RemoveScroll.classNames.zeroRight}>
        <Container size="xl" px="md" className={classes.inner}>
          <Link href="/" className={cx('mantine-focus-auto', classes.logo)}>
            <MantineLogo size={30} />
          </Link>

          <HeaderControls
            visibleFrom="sm"
            onSearch={() => {}}
            githubLink={meta.gitHubLinks.mantineUi}
            withDirectionToggle={false}
          />

          <Group hiddenFrom="sm">
            <ColorSchemeControl />
          </Group>
        </Container>
      </AppShell.Header>
      <AppShell.Main>
        <div className={classes.main}>{children}</div>
      </AppShell.Main>
    </AppShell>
  );
}
