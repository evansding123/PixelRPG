import React from 'react'
import ReactDOM from 'react-dom';
import {render, fireEvent, waitFor, screen, cleanup} from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect';
import { act } from 'react-dom/test-utils';
import { useAuth, currentUser, AuthProvider } from '../../src/contexts/AuthContext'
import IndividualCharacter from '../components/IndividualCharacter.jsx';



